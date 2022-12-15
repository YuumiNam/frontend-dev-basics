/**
 전역 객체(Global Object)
*/

global.n = "둘리";
console.log(global.n, n); // global은 생략가능... setTimeout(){}도 엄밀히따지면 global.setTimeout(){}임

var email = "dooli@gmail.com"
console.log(global.email, email); // 반대로는 안됨 (하지만 Browser에서는 됨, window라는 전역객체의 속성이라고 보기때문)