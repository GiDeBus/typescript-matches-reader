import fs from 'fs';

const matches = fs.readFileSync(
  'football.csv', { encoding: 'utf-8' }
).split('\n').map((row: string): string[] => { 
  return row.split(',');
});


enum MatchResults { 
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manchesterUnitedWins = 0;

for (let match of matches) { 
  if (match[1] === 'Man United' && match[5] === 'H') {
    manchesterUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') { 
    manchesterUnitedWins++
  }
}

console.log(manchesterUnitedWins);