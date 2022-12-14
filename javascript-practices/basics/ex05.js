/*
구문(Statement)

1. 구문은 실행 단위
2. 구문의 구성 요소
    표현식: 값, 연산자, 변수, 함수호출
    주석
    키워드
3. 구문의 예
    - 주석구문
    - if(1 - 1) {....}
    - for, while, do~while, for~in, switch
4. 세미콜론(;)
    - 표현식을 표현식문으로 만들어서 바로 실행하게 한다.
5. 개행
    - 세미콜론 역할
    - 스페이스 역할 (token을 분리하는 역할)
6. 결론
    세미콜론을 안붙여도 실행은 되지만
    자바때 하던것처럼 세미콜론을 **반드시** 붙이자
*/

function f() {
    return true;
}

if(f()) {
    //....
}

i = 10; j = 20; k = 30; // 개행의 스페이스 역할

s = "Hello World"; // 개행의 세미콜론 역할
console.log(s);

a
=
1
+
2

o = {
};

if(i == 10) {
}