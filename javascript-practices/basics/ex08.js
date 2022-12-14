/**
 자바스크립트 객체3: 확장
 */

 var o = {
    name: '둘리',
    age: 10
 }

 var f = function() {
    console.log("Hello World");
 }

 console.log("========확장========");
 o.another = {
    name: '마이콜',
    age: 15
 }
 console.log(o);

 f.another = {
    name: '마이콜',
    age: 15, 
    print: function() {
        console.log(this.name + ":" + this.age);
    }
 }
 console.log(f);


 console.log("========기본타입[primitive type]은 확장되지 않는다========");
 var i1 = 10;
 var i2 = new Number(10);

 console.log(i1 + typeof(i1) + " : " + i2 + typeof(i2) + " : " + (i1 + i2));
 
 i2.another = {
    name: '마이콜',
    age: 15
 }
 console.log(i2);

 i1.another = {             // 에러가 나지는 않음
    name: '둘리',           // 유사객체로 실행 : new Number(i1).another = {};
    age: 10
 };           
 console.log(i1.another);