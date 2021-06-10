let fs = require('fs');
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => parseInt(i));
let result = [];
const sum = input.reduce((a, b) => (a + b));
for (let i=0; i<8; i++) {
    for (let j=i+1; j<9; j++) {
        if  (input[i] + input [j] + 100 === sum) {
            result = input.filter(x => x !== input[i] && x !== input[j]);
            break;
        }
    }
    if (result.length > 0) break;
}
result.sort((a, b) => a - b);
for(let i=0; i<7; i++) console.log(result[i]);