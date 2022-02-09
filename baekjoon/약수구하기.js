let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const N = Number(input[0]);
const K = Number(input[1]);
const answer = [];
for (let i = 1; i < N+1; i++) {
    if (N % i === 0 ) {
        answer.push(i);
    }
}
(answer.length >= K? console.log(answer[K-1]) : console.log(0));