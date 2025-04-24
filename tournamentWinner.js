// given an array of pairs representing the teams that have competed against each other and
// an array containing the results of each competition,
// write a function that returns the winner of the tournament.

// The input arrays are named "competetions" and "results".
// The competetions array has elements in the forms of [homeTeam, awayTeam],
// where each team is a string of at most 30 chars representing the name of the team.
// The results array contains info about the winner of each corresponsding competion in the competitions array.

// The results[i] denotes the winner of competitionns[i],
// where 1 in the results array means that the home team in the corresponding competition won,
// and 0 means that away team won.

// ip -
// competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
// ]

// op -
// "Python"

// tc - O(n);
// sc - o(size of hashmap);
function tournamentWinner(competitions, results) {
  const scores = {};
  let currentBestTeam = "";
  scores[currentBestTeam] = 0;

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];
    const winningTeam = result === 1 ? homeTeam : awayTeam;

    if (!(winningTeam in scores)) {
      scores[winningTeam] = 0;
    }

    scores[winningTeam] += 3;

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}
const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

console.log(tournamentWinner(competitions, results)); // "Python"
