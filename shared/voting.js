// ─── Universelles Voting-System ───
// Unterstützt Ranked Choice (Hotels), Ja/Nein (Aktivitäten) und Custom Polls.
// Speichert in localStorage (Fallback) oder shared.json (via data-sync).

var SizilienVoting = (function() {
  var LOCAL_KEY = 'sizilien2026_votes';

  function getLocalVotes() {
    try { return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {}; }
    catch(e) { return {}; }
  }
  function saveLocalVotes(votes) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(votes));
  }

  // ── Ranked Choice Vote abgeben ──
  function castRankedVote(sektion, itemId, userId, rang) {
    if (typeof SizilienData !== 'undefined' && SizilienData.isConfigured()) {
      SizilienData.vote(sektion, itemId, userId, rang);
    } else {
      var votes = getLocalVotes();
      if (!votes[sektion]) votes[sektion] = {};
      if (!votes[sektion][itemId]) votes[sektion][itemId] = {};
      votes[sektion][itemId][userId] = rang;
      saveLocalVotes(votes);
    }
  }

  // ── Ja/Nein Vote ──
  function castBoolVote(sektion, itemId, userId, value) {
    castRankedVote(sektion, itemId, userId, value);
  }

  // ── Poll Vote ──
  function castPollVote(pollId, userId, optionId) {
    castRankedVote('polls', pollId, userId, optionId);
  }

  // ── Votes laden ──
  function getVotes(sektion, callback) {
    if (typeof SizilienData !== 'undefined' && SizilienData.isConfigured()) {
      SizilienData.load(function(err, data) {
        callback(data && data.votes && data.votes[sektion] ? data.votes[sektion] : {});
      });
    } else {
      var votes = getLocalVotes();
      callback(votes[sektion] || {});
    }
  }

  // ── Borda Count Berechnung (für Ranked Choice) ──
  // rang=1 → höchste Punkte, rang=N → niedrigste
  function bordaCount(votes, maxRang) {
    maxRang = maxRang || 3;
    var scores = {};
    Object.keys(votes).forEach(function(itemId) {
      var itemVotes = votes[itemId];
      var total = 0;
      var voterCount = 0;
      Object.keys(itemVotes).forEach(function(userId) {
        var rang = itemVotes[userId];
        if (typeof rang === 'number' && rang >= 1 && rang <= maxRang) {
          total += (maxRang + 1 - rang); // rang 1 → maxRang Punkte
          voterCount++;
        }
      });
      scores[itemId] = { punkte: total, stimmen: voterCount, details: itemVotes };
    });
    return scores;
  }

  // ── Ja/Nein Zählung ──
  function countBoolVotes(votes) {
    var counts = {};
    Object.keys(votes).forEach(function(itemId) {
      var itemVotes = votes[itemId];
      var ja = 0, nein = 0, voters = [];
      Object.keys(itemVotes).forEach(function(userId) {
        if (itemVotes[userId] === true || itemVotes[userId] === 'ja') {
          ja++;
          voters.push(userId);
        } else if (itemVotes[userId] === false || itemVotes[userId] === 'nein') {
          nein++;
        }
      });
      counts[itemId] = { ja: ja, nein: nein, voters: voters, total: ja + nein, details: itemVotes };
    });
    return counts;
  }

  // ── Poll Ergebnis ──
  function countPollVotes(pollVotes) {
    var results = {};
    Object.keys(pollVotes).forEach(function(userId) {
      var choice = pollVotes[userId];
      results[choice] = (results[choice] || 0) + 1;
    });
    return results;
  }

  // ── UI: Ranked Choice Voting Card rendern ──
  function renderRankedVotingCard(itemId, itemName, sektion, userVotes, maxRang) {
    maxRang = maxRang || 3;
    var activeUser = getActiveUser();
    var currentVote = userVotes && userVotes[activeUser] ? userVotes[activeUser] : null;

    var html = '<div class="voting-inline">';
    for (var r = 1; r <= maxRang; r++) {
      var isSelected = currentVote === r;
      html += '<button class="vote-rank-btn' + (isSelected ? ' selected' : '') + '" ' +
        'onclick="voteRanked(\'' + sektion + '\',' + itemId + ',' + r + ')" ' +
        'title="' + r + '. Wahl">' + r + '.</button>';
    }

    // Wer hat gestimmt
    if (userVotes) {
      var voterHtml = '';
      Object.keys(userVotes).forEach(function(uid) {
        var r = getReisenderById(uid);
        if (r) voterHtml += renderInitiale(r, 22);
      });
      if (voterHtml) html += '<span class="vote-voters">' + voterHtml + '</span>';
    }

    html += '</div>';
    return html;
  }

  // ── UI: Ja/Nein Voting Badge rendern ──
  function renderBoolVotingBadge(itemId, sektion, counts) {
    var activeUser = getActiveUser();
    var itemCounts = counts[itemId] || { ja: 0, nein: 0, voters: [], details: {} };
    var myVote = itemCounts.details[activeUser];

    var html = '<div class="voting-bool">';
    html += '<button class="vote-bool-btn ja' + (myVote === true || myVote === 'ja' ? ' selected' : '') + '" ' +
      'onclick="voteBool(\'' + sektion + '\',' + itemId + ',true)">' +
      '\u{1F44D}</button>';
    html += '<button class="vote-bool-btn nein' + (myVote === false || myVote === 'nein' ? ' selected' : '') + '" ' +
      'onclick="voteBool(\'' + sektion + '\',' + itemId + ',false)">' +
      '\u{1F44E}</button>';
    html += '<span class="vote-count" title="' + itemCounts.ja + ' daf\u00FCr">' +
      itemCounts.ja + '/' + REISENDE.length + '</span>';

    // Voter Initialen
    itemCounts.voters.forEach(function(uid) {
      var r = getReisenderById(uid);
      if (r) html += renderInitiale(r, 20);
    });

    html += '</div>';
    return html;
  }

  // ── UI: Borda-Ranking Balkendiagramm ──
  function renderBordaChart(scores, items, nameGetter) {
    var sorted = Object.keys(scores).sort(function(a, b) {
      return scores[b].punkte - scores[a].punkte;
    });
    var maxScore = sorted.length > 0 ? scores[sorted[0]].punkte : 1;
    if (maxScore === 0) maxScore = 1;

    var html = '<div class="borda-chart">';
    sorted.forEach(function(itemId, i) {
      var s = scores[itemId];
      var pct = Math.round(s.punkte / maxScore * 100);
      var name = nameGetter(itemId);
      var medal = i === 0 ? '\u{1F947}' : i === 1 ? '\u{1F948}' : i === 2 ? '\u{1F949}' : '';

      html += '<div class="borda-row">' +
        '<div class="borda-label">' + medal + ' ' + esc(name) + '</div>' +
        '<div class="borda-bar-track"><div class="borda-bar-fill" style="width:' + pct + '%">' +
        s.punkte + ' Pkt. (' + s.stimmen + ' Stimmen)</div></div>' +
        '<div class="borda-voters">';
      Object.keys(s.details).forEach(function(uid) {
        var r = getReisenderById(uid);
        if (r) html += '<span title="' + esc(r.name) + ': ' + s.details[uid] + '. Wahl">' + renderInitiale(r, 22) + '</span>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return html;
  }

  return {
    castRankedVote: castRankedVote,
    castBoolVote: castBoolVote,
    castPollVote: castPollVote,
    getVotes: getVotes,
    bordaCount: bordaCount,
    countBoolVotes: countBoolVotes,
    countPollVotes: countPollVotes,
    renderRankedVotingCard: renderRankedVotingCard,
    renderBoolVotingBadge: renderBoolVotingBadge,
    renderBordaChart: renderBordaChart
  };
})();
