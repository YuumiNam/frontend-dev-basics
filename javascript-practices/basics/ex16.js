/*
함수: function 타입의 객체
*/

// 함수를 생성하는 방법1: 함수 리터럴
console.log("========== 함수를 생성하는 방법1: 리터럴 ===========")
function f1(a, b) {
    return a + b;
}

console.log(typeof(f1), f1 instanceof Function, f1(10, 20));



// 함수를 생성하는 방법2: 함수 리터럴 (추천)
console.log("========== 함수를 생성하는 방법2: 리터럴 (추천)===========")
var f2 = function(a, b) {
    return a + b;
}

console.log(typeof(f2), f2 instanceof Function, f2(10, 20));



// 함수를 생성하는 방법3: new 연산자와 함께 Function내장객체(생성자함수)를 사용
console.log("========== 함수를 생성하는 방법3: new연산자 ===========")
var f3 = new Function("a", "b", "return a + b;");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));



// 함수를 생성하는 방법4: 익명(annonymous)함수
console.log("========== 함수를 생성하는 방법4: 익명함수 ===========")
var f4 = function(p) {
    p();
}

f4(function() {
    console.log("!!!!"); // 파라미터에 함수를 통째로 넣음
});


setTimeout(function() {
    console.log('time out!');
}, 1000);



// 익명(annonymous)함수의 응용: 한번만(즉시) 실행하는 함수
console.log("========== 익명함수의 응용 ===========")
var s = (function(a, b) {
    var m = 10;
    return a/m + b/m;
})(10, 20);

console.log(s);



// 가변 파리미터
// 1. 자바스크림트의 함수 파라미터들은 기본적으로 가변 파라미터
//    파라미터는 자바와 다르게 고정되어 있지 않다 (에러가 나지않음)
console.log("========== 가변 파라미터 ===========")
var f4 = function(a, b, c) {
    console.log(a, b, c);
}

f4(10, 20, 30, 40, 50, 60);


// 2. 예시
var sum = function() {
    var s = 0;

    console.log(arguments instanceof Array, arguments instanceof Object, arguments.length); // arguments는 배열과 비슷한 모양이지만 배열은 아니다 (유사배열)

    // for(let i = 0; i < arguments.length; i++) {
    //    s += arguments[i];
    // }


    // Error: arguments는 배열이 아니기때문에 그 prototype인 forEach 함수를 쓸수없음
    // arguments.forEach(function(e) {
    //     s += e;
    // });
    

    // Array의 prototype을 불러오는건 상관없지만 this가 sum함수가 아닌 Array가 되어버려서 맞지않는다
    // 이럴때 apply(파라미터가 없을 때), call(파라미터가 있을 때) 을 쓴다
    Array.prototype.forEach.call(arguments, function(e) {
        s += e;
    })

    // return s;
}

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4));



// 위의 call 설명
var myObject = {
    v : "둘리",
    f : function() {
        console.log(this.v);
    },
    f1 : function(param1, param2) {
        console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
    }
}

var yourObject = {
    v : "dooli"
}

myObject.f(); // 일반적인 함수 실행
myObject.f.apply(yourObject); // apply를 쓰면 this를 자신이 아닌 다른 함수를 this로 지정가능
myObject.f1.call(yourObject, "Hello", "again"); // call = apply + 파라미터지정가능



// 나온김에 ex12.js에 나왔던 bind도 설명
var fb = function() {
    console.log(this.v);
}.bind(yourObject);

fb();