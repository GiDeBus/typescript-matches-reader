import { CsvClassReader } from "./CsvClassReader";

const reader = new CsvClassReader('football.csv');
reader.read();

enum MatchResults { 
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manchesterUnitedWins = 0;

for (let match of reader.data) { 
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manchesterUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) { 
    manchesterUnitedWins++
  }
}

console.log(manchesterUnitedWins);