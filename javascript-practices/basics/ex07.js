/**
 자바스크립트 객체2: function 타입
 */

 // 1. 일반함수
 //    실행코드(알고리즘) 블록이 있는 객체... 관례에 따라서 소문자로 시작
var myFunction = function() {
    console.log('일반함수');
}

myFunction();

 // 2. 생성자함수
 //    실행코드(객체초기화) 블록이 있는 객체... 관례에 따라서 대문자로 시작
 var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
 }

 var o1 = new MyObject('둘리', 10);
 var o2 = new MyObject('마이콜', 15);

 console.log(o1);
 console.log(o2);