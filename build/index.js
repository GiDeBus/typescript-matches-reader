"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvClassReader_1 = require("./CsvClassReader");
const MatchResults_1 = require("./MatchResults");
const reader = new CsvClassReader_1.CsvClassReader('football.csv');
reader.read();
let manchesterUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manchesterUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manchesterUnitedWins++;
    }
}
console.log(manchesterUnitedWins);
