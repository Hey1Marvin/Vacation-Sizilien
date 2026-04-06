// ─── Cloudflare Worker: GitHub OAuth Token Exchange Proxy ───
// Hält das client_secret serverseitig.
// Deploy: wrangler deploy
//
// Environment Variables (im Cloudflare Dashboard setzen):
//   GITHUB_CLIENT_ID     - OAuth App Client ID
//   GITHUB_CLIENT_SECRET - OAuth App Client Secret
//   ALLOWED_ORIGIN       - z.B. https://hey1marvin.github.io

export default {
  async fetch(request, env) {
    // CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(env.ALLOWED_ORIGIN || '*')
      });
    }

    // Nur POST /token erlauben
    const url = new URL(request.url);
    if (request.method !== 'POST' || url.pathname !== '/token') {
      return new Response('Not Found', { status: 404 });
    }

    try {
      const body = await request.json();

      // Nur erwartete Felder durchlassen
      const payload = {
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        device_code: body.device_code,
        grant_type: body.grant_type || 'urn:ietf:params:oauth:grant-type:device_code'
      };

      const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(env.ALLOWED_ORIGIN || '*')
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'server_error', error_description: err.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(env.ALLOWED_ORIGIN || '*')
        }
      });
    }
  }
};

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
}
