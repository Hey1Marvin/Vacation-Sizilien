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

  // ── Vote abgeben (null entfernt die Stimme, 0 ist gültiger Wert "Egal") ──
  function castRankedVote(sektion, itemId, userId, rang, callback) {
    callback = callback || function() {};
    if (typeof SizilienData !== 'undefined' && SizilienData.isConfigured()) {
      SizilienData.vote(sektion, itemId, userId, rang, callback);
    } else {
      var votes = getLocalVotes();
      if (!votes[sektion]) votes[sektion] = {};
      if (!votes[sektion][itemId]) votes[sektion][itemId] = {};
      if (rang === null || rang === undefined) {
        delete votes[sektion][itemId][userId];
      } else {
        votes[sektion][itemId][userId] = rang;
      }
      saveLocalVotes(votes);
      callback(null);
    }
  }

  // ── Ja/Nein Vote ──
  function castBoolVote(sektion, itemId, userId, value, callback) {
    castRankedVote(sektion, itemId, userId, value, callback);
  }

  // ── Poll Vote ──
  function castPollVote(pollId, userId, optionId, callback) {
    castRankedVote('polls', pollId, userId, optionId, callback);
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

  // ── Punkte-Berechnung ──
  // Skala: +2 (Favorit), +1 (Gut), 0 (Egal), -1 (Nein)
  // Punkte = Summe aller abgegebenen Stimmen
  function bordaCount(votes) {
    var scores = {};
    Object.keys(votes).forEach(function(itemId) {
      var itemVotes = votes[itemId];
      var total = 0;
      var voterCount = 0;
      Object.keys(itemVotes).forEach(function(userId) {
        var val = itemVotes[userId];
        if (typeof val === 'number') {
          total += val;
          voterCount++;
        }
      });
      scores[itemId] = { punkte: total, stimmen: voterCount, details: itemVotes };
    });
    return scores;
  }

  // Vote-Wert → Label für Tooltips
  var VOTE_LABELS = { 2: 'Favorit', 1: 'Gut', 0: 'Egal', '-1': 'Nein' };
  function voteLabel(val) { return VOTE_LABELS[val] || String(val); }

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

  // ── UI: Bewertungs-Buttons rendern ──
  // Skala: +2 (Favorit), +1 (Gut), 0 (Egal), -1 (Nein)
  var VOTE_OPTIONS = [
    { value: 2, label: '+2', title: 'Favorit', cls: 'vote-fav' },
    { value: 1, label: '+1', title: 'Gut', cls: 'vote-good' },
    { value: 0, label: '0', title: 'Egal', cls: 'vote-meh' },
    { value: -1, label: '-1', title: 'Nein', cls: 'vote-nope' }
  ];

  function renderRankedVotingCard(itemId, itemName, sektion, userVotes) {
    var activeUser = getActiveUser();
    var currentVote = userVotes && activeUser && (activeUser in userVotes) ? userVotes[activeUser] : null;

    var html = '<div class="voting-inline">';
    VOTE_OPTIONS.forEach(function(opt) {
      var isSelected = currentVote === opt.value;
      html += '<button class="vote-rank-btn ' + opt.cls + (isSelected ? ' selected' : '') + '" ' +
        'onclick="voteRanked(\'' + sektion + '\',' + itemId + ',' + opt.value + ')" ' +
        'title="' + opt.title + '">' + opt.label + '</button>';
    });

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

  // ── UI: Gruppen-Ranking Balkendiagramm ──
  function renderBordaChart(scores, items, nameGetter) {
    var sorted = Object.keys(scores).sort(function(a, b) {
      return scores[b].punkte - scores[a].punkte;
    });
    // Max für Balkenlänge: mindestens 1, negative Werte → Balken bei 0%
    var maxScore = sorted.length > 0 ? Math.max(scores[sorted[0]].punkte, 1) : 1;

    var html = '<div class="borda-chart">';
    sorted.forEach(function(itemId, i) {
      var s = scores[itemId];
      var pct = s.punkte > 0 ? Math.round(s.punkte / maxScore * 100) : 0;
      var name = nameGetter(itemId);
      var medal = i === 0 ? '\u{1F947}' : i === 1 ? '\u{1F948}' : i === 2 ? '\u{1F949}' : '';
      var sign = s.punkte > 0 ? '+' : '';

      html += '<div class="borda-row' + (s.punkte < 0 ? ' borda-negative' : '') + '">' +
        '<div class="borda-label">' + medal + ' ' + esc(name) + '</div>' +
        '<div class="borda-bar-track"><div class="borda-bar-fill' + (s.punkte < 0 ? ' negative' : '') + '" style="width:' + Math.max(pct, s.stimmen ? 8 : 0) + '%">' +
        sign + s.punkte + ' Pkt. (' + s.stimmen + ')</div></div>' +
        '<div class="borda-voters">';
      Object.keys(s.details).forEach(function(uid) {
        var r = getReisenderById(uid);
        if (r) html += '<span title="' + esc(r.name) + ': ' + voteLabel(s.details[uid]) + '">' + renderInitiale(r, 22) + '</span>';
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
