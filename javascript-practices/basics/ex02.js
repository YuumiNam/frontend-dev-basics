/*
변수와 자료형(Data Type)

[기본타입(Primitive Type)]
- undefined
- number (정수와 실수의 구분이 없음)
- string
- boolean

[객체]
- object
    1. new 생성자함수() 사용해서 생성
        Number() => object 타입 객체
        String() => object 타입 객체
        Boolean() => object 타입 객체
        Object() => object 타입 객체
        Array() => object 타입 객체
        Date() => object 타입 객체
        RegExp() => object 타입 객체
        Function() => function타입의 객체!!!!
    
    2. {} 객체 리터럴, (J)ava(S)cript (O)bject (N)otation
    3. [] 배열 리터럴
    4. null
- function
    1. function f() {....}
    2. var f = function() {....}
    3. var f = new Function(....)
*/


/*
자바스크림트 객체를 분류하는 또 다른 방법
1. 내장 객체: 
	- JavaScript Engine 내부에 미리 내장되어 있는 객체
	- Number, Boolean, Date, RegExp, Array, Object, .... : 생성자 함수
	- parseInt, setTimeout, setInterval, .... : 일반 함수
	
2. 호스트 객체: 
	- JavaScript Engine이 embeded 되어있는 환경에 있는 객체
	- Browser가 호스트인 경우: screen, location, navigator, ***DOM***, ***XmlHttpRequest***, ....
	- Node가 호스트인 경우 (Node.js에서 서버만들때): http, os, fs, path, ....
	
3. 사용자 객체
	- JavaScript Engine이 실행되면서 생성되는 객체
*/



// var는 변수를 선언한다는 의미일뿐 타입을 결정하는게 아님
console.log("========기본타입========");
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

console.log(s.toUpperCase()); // 유사객체 - 기본타입에도 메소드를 불러올수있음



console.log("========객체타입(object)========");
// js는 문법적으로 class를 지원하지만 내부적으로는 class라는 개념이 없음
// 자바랑 달리 new 뒤에는 클래스 객체가 아닌 함수가 옴
var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array(10, 20, 30);
var d = new Date();
var o2 = {};
var a2 = [10, 20, 30];
var n = null;

console.log(i2 + ":" + typeof(i2) + ":" + (i2 instanceof(Number))); // instanceof는 객체의 생성자함수가 맞나 알려줌
console.log(s2 + ":" + typeof(s2) + ":" + (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2) + ":" + (b2 instanceof(Boolean)));
console.log(o + ":" + typeof(o) + ":" + (o instanceof(Object)));
console.log(a + ":" + typeof(a) + ":" + (a instanceof(Array)));
console.log(d + ":" + typeof(d) + ":" + (d instanceof(Date)));
console.log(o2 + ":" + typeof(o2) + ":" + (o2 instanceof(Object)));
console.log(a2 + ":" + typeof(a2) + ":" + (a2 instanceof(Array)));
console.log(n + ":" + typeof(n) + ":" + (n instanceof(Object))); // null은 생성자함수가 없는듯....??



console.log("========객체타입(function)========");

function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) { // 추천!!
    return a + b;
}

var f3 = new Function("a", "b", "return a+b;"); // 별로...

console.log(f1(10,20), f2(10,20), f3(10,20));

console.log("f1:" + typeof(f1) + ":" + (f1 instanceof(Function)));
console.log("f2:" + typeof(f2) + ":" + (f2 instanceof(Function)));
console.log("f3:" + typeof(f3) + ":" + (f3 instanceof(Function)));



// 원시타입에 메소드가 호출될 때
// 유사객체(임시Wrapper객체)가 만들어져서 메소드 호출이 일어난 뒤 사라진다
console.log("========원시타입도 메소드 호출이 가능하다========");
console.log(b.valueOf()); // new boolean(b).valueOf()
console.log(b2.valueOf());