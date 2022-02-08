let fs = require('fs');
let input = fs.readFileSync('/dev/stdin');
const numbers = input
  .toString()
  .trim()
  .split('\n')
  .map((i) => i.split('').map((v) => +v));
const answer = [[+numbers[1], 0]];
let layer = 0;

for (let i = 0; i < numbers[0] - 1; i++) {
  for (let j = 0; j < 2 ** i; j++) {
    answer.push([
      answer[layer][0] + numbers[i + 2][answer[layer][1]],
      answer[layer][1],
    ]);
    answer.push([
      answer[layer][0] + numbers[i + 2][answer[layer][1] + 1],
      answer[layer][1] + 1,
    ]);
    layer += 1;
  }
}

console.log(Math.max(...answer.flatMap((x) => x)));
