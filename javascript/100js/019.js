// 문제19 : 제곱을 구하자
/*
공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

const n = prompt("두 수 입력").split(" ");

const a = parseInt(n[0], 10);
const b = parseInt(n[1], 10);

let result = 1;

for (let i = 0; i < b; i++) {
    result *= a;
}

console.log(result);

//console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));