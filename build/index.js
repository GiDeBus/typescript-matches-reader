"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvClassReader_1 = require("./CsvClassReader");
const reader = new CsvClassReader_1.CsvClassReader('football.csv');
reader.read();
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
let manchesterUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manchesterUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manchesterUnitedWins++;
    }
}
console.log(manchesterUnitedWins);
