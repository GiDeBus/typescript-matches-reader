import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from './MatchResults';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manchesterUnitedWins = 0;

for (let match of matchReader.matches) { 
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manchesterUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) { 
    manchesterUnitedWins++
  }
}

console.log(manchesterUnitedWins);