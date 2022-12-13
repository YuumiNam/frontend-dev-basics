/*
변수와 자료형(Data Type)

[기본타입(Primitive Type)]
- undefined
- number (정수와 실수의 구분이 없음)
- string
- boolean

[객체]

*/

// var는 변수를 선언한다는 의미일뿐 타입을 결정하는게 아님
var u = undefined; // var u; 와 동일
var i = 10;
var j = 1.5;
var s = "Hello World";
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(j + ":" + typeof(j));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log(s.toUpperCase());