let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const layer = +input.shift();
const numbers = input.map((v) => v.split(' ').map((x) => +x));

for (let i = 1; i < layer; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) numbers[i][0] += numbers[i - 1][0];
    else if (j === i) numbers[i][j] += numbers[i - 1][j - 1];
    else numbers[i][j] += Math.max(numbers[i - 1][j - 1], numbers[i - 1][j]);
  }
}
console.log(Math.max(...numbers[layer - 1]));
