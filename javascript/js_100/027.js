// 문제27 : 객체 만들기
/*
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
*/

function init() {
    const names = prompt("이름 입력").split(" ");
    const scores = prompt("점수 입력").split(" ");
    const studentObj = {};
    for (let i = 0; i < names.length; i++) {
        studentObj[names[i]] = parseInt(scores[i]);
    }
    console.log(studentObj);
}

init();