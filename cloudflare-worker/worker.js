// ─── Cloudflare Worker: GitHub OAuth + URL Scraper Proxy ───
// Deploy: wrangler deploy
//
// Environment Variables (im Cloudflare Dashboard setzen):
//   GITHUB_CLIENT_ID     - OAuth App Client ID
//   GITHUB_CLIENT_SECRET - OAuth App Client Secret
//   ALLOWED_ORIGIN       - z.B. https://hey1marvin.github.io

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || '*';

    // CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);

    // ── POST /token — GitHub OAuth ──
    if (request.method === 'POST' && url.pathname === '/token') {
      return handleToken(request, env, origin);
    }

    // ── POST /scrape — URL Scraping ──
    if (request.method === 'POST' && url.pathname === '/scrape') {
      return handleScrape(request, origin);
    }

    return new Response('Not Found', { status: 404 });
  }
};

// ── GitHub OAuth Token Exchange ──
async function handleToken(request, env, origin) {
  try {
    const body = await request.json();
    const payload = {
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      device_code: body.device_code,
      grant_type: body.grant_type || 'urn:ietf:params:oauth:grant-type:device_code'
    };

    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return jsonResponse(data, 200, origin);
  } catch (err) {
    return jsonResponse({ error: 'server_error', error_description: err.message }, 500, origin);
  }
}

// ── URL Scraping: Fetch page and extract structured data ──
async function handleScrape(request, origin) {
  try {
    const body = await request.json();
    const targetUrl = body.url;

    if (!targetUrl || typeof targetUrl !== 'string') {
      return jsonResponse({ error: 'missing_url', message: 'URL ist erforderlich' }, 400, origin);
    }

    // Basic URL validation
    let parsed;
    try { parsed = new URL(targetUrl); } catch(e) {
      return jsonResponse({ error: 'invalid_url', message: 'Ungueltige URL' }, 400, origin);
    }

    // Fetch the page
    const pageResponse = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'de-DE,de;q=0.9,en;q=0.8'
      },
      redirect: 'follow'
    });

    if (!pageResponse.ok) {
      return jsonResponse({
        error: 'fetch_failed',
        message: 'Seite konnte nicht geladen werden (Status ' + pageResponse.status + ')'
      }, 502, origin);
    }

    const html = await pageResponse.text();
    const hostname = parsed.hostname.toLowerCase();

    let result = { source: hostname, url: targetUrl };

    // Extract Open Graph / meta tags
    result.og = extractMetaTags(html);

    // Extract JSON-LD structured data
    result.jsonld = extractJsonLd(html);

    // Platform-specific extraction
    if (hostname.includes('booking.com')) {
      result.platform = 'Booking.com';
      result.extracted = extractBooking(html, result);
    } else if (hostname.includes('airbnb')) {
      result.platform = 'Airbnb';
      result.extracted = extractAirbnb(html, result);
    } else {
      result.platform = 'Andere';
      result.extracted = extractGeneric(result);
    }

    return jsonResponse(result, 200, origin);
  } catch (err) {
    return jsonResponse({
      error: 'scrape_error',
      message: 'Fehler beim Scrapen: ' + err.message
    }, 500, origin);
  }
}

// ── Extract meta tags (og:, twitter:, description, etc.) ──
function extractMetaTags(html) {
  var tags = {};
  var metaRegex = /<meta\s+(?:[^>]*?\s)?(?:property|name)=["']([^"']+)["']\s+(?:[^>]*?\s)?content=["']([^"']*?)["'][^>]*>/gi;
  var match;
  while ((match = metaRegex.exec(html)) !== null) {
    tags[match[1]] = match[2];
  }
  // Also try reversed order (content before property)
  var metaRegex2 = /<meta\s+(?:[^>]*?\s)?content=["']([^"']*?)["']\s+(?:[^>]*?\s)?(?:property|name)=["']([^"']+)["'][^>]*>/gi;
  while ((match = metaRegex2.exec(html)) !== null) {
    if (!tags[match[2]]) tags[match[2]] = match[1];
  }
  // Title tag
  var titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) tags['title'] = titleMatch[1].trim();
  return tags;
}

// ── Extract JSON-LD blocks ──
function extractJsonLd(html) {
  var results = [];
  var regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  var match;
  while ((match = regex.exec(html)) !== null) {
    try {
      var parsed = JSON.parse(match[1].trim());
      results.push(parsed);
    } catch(e) { /* ignore malformed JSON-LD */ }
  }
  return results;
}

// ── Booking.com specific extraction ──
function extractBooking(html, data) {
  var result = {};
  var og = data.og || {};
  var jsonld = data.jsonld || [];

  // Name from og:title or title
  result.name = og['og:title'] || og['title'] || '';
  // Clean up Booking.com title format: "Name, City – Preise ab €XX"
  if (result.name) {
    result.name = result.name.replace(/\s*[-–—]\s*(Preise|Prices|Book).*$/i, '').replace(/,\s*\w+\s*$/,'').trim();
  }

  // Location from JSON-LD or og
  for (var i = 0; i < jsonld.length; i++) {
    var ld = jsonld[i];
    if (ld['@type'] === 'Hotel' || ld['@type'] === 'LodgingBusiness' || ld['@type'] === 'Accommodation') {
      if (ld.name) result.name = ld.name;
      if (ld.address) {
        result.address = typeof ld.address === 'string' ? ld.address :
          (ld.address.streetAddress || '') + ', ' + (ld.address.addressLocality || '');
        result.location = ld.address.addressLocality || '';
      }
      if (ld.aggregateRating) {
        result.rating = parseFloat(ld.aggregateRating.ratingValue) || null;
        result.ratingCount = parseInt(ld.aggregateRating.reviewCount || ld.aggregateRating.ratingCount) || null;
        result.ratingScale = parseFloat(ld.aggregateRating.bestRating) || 10;
      }
      if (ld.geo) {
        result.mapLat = parseFloat(ld.geo.latitude) || null;
        result.mapLng = parseFloat(ld.geo.longitude) || null;
      }
      if (ld.image) {
        result.image = typeof ld.image === 'string' ? ld.image : (ld.image[0] || '');
      }
    }
  }

  // Fallback: Try regex patterns for Booking.com specific data
  var ratingMatch = html.match(/data-testid="review-score-component"[^>]*>[\s\S]*?(\d+[.,]\d+)/);
  if (ratingMatch && !result.rating) {
    result.rating = parseFloat(ratingMatch[1].replace(',', '.'));
  }

  var reviewCountMatch = html.match(/(\d[\d.,]*)\s*(?:Bewertungen|reviews|Rezensionen)/i);
  if (reviewCountMatch && !result.ratingCount) {
    result.ratingCount = parseInt(reviewCountMatch[1].replace(/[.,]/g, ''));
  }

  // Coordinates from HTML
  var latMatch = html.match(/b_map_center_latitude["':=\s]+(-?[\d.]+)/);
  var lngMatch = html.match(/b_map_center_longitude["':=\s]+(-?[\d.]+)/);
  if (latMatch && !result.mapLat) result.mapLat = parseFloat(latMatch[1]);
  if (lngMatch && !result.mapLng) result.mapLng = parseFloat(lngMatch[1]);

  result.link = data.url;
  result.platform = 'Booking.com';
  result.ratingScale = result.ratingScale || 10;

  return result;
}

// ── Airbnb specific extraction ──
function extractAirbnb(html, data) {
  var result = {};
  var og = data.og || {};

  // Airbnb uses React so most data is in JS, but og tags are present
  result.name = og['og:title'] || og['title'] || '';
  result.name = result.name.replace(/\s*[-–—]\s*(Ferienwohnungen|Holiday|Vacation|Airbnb).*$/i, '').trim();

  result.location = og['og:locality'] || og['airbedandbreakfast:city'] || '';

  // Airbnb embeds data in a large __NEXT_DATA__ JSON
  var nextDataMatch = html.match(/<script\s+id="data-deferred-state-0"[^>]*>([\s\S]*?)<\/script>/);
  if (!nextDataMatch) {
    nextDataMatch = html.match(/<script\s+id="data-state"[^>]*>([\s\S]*?)<\/script>/);
  }

  // Try to extract coordinates from og tags
  var latOg = og['place:location:latitude'] || og['og:latitude'];
  var lngOg = og['place:location:longitude'] || og['og:longitude'];
  if (latOg) result.mapLat = parseFloat(latOg);
  if (lngOg) result.mapLng = parseFloat(lngOg);

  // Price from og:price if available
  if (og['og:price:amount']) {
    result.priceHint = og['og:price:amount'] + ' ' + (og['og:price:currency'] || 'EUR');
  }

  result.link = data.url;
  result.platform = 'Airbnb';
  result.ratingScale = 5;

  // Image
  if (og['og:image']) result.image = og['og:image'];

  return result;
}

// ── Generic extraction ──
function extractGeneric(data) {
  var og = data.og || {};
  return {
    name: og['og:title'] || og['title'] || '',
    location: og['og:locality'] || '',
    link: data.url,
    platform: 'Andere',
    image: og['og:image'] || ''
  };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) }
  });
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
}
