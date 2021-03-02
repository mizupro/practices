// 문제28 : 2-gram
/*
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t
*/

function init() {
    const s = prompt("입력");
    for (let i = 0; i < s.length - 1; i++) {
        console.log(s[i], s[i + 1]);
    }
}

init();