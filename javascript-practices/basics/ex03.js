/* null과 undefined */

var myVar01 = undefined; // 명시적으로 undefined 대입
var myVar02;             // 암시적으로 undefined 대입
var myVar03 = null;

console.log(myVar01 + ":" + myVar02 + ":" + myVar03);
// console.log(myVar04);    // not defined error

console.log("========================");



// undefined와 null의 동치(equal)비교
console.log(myVar01 == myVar03);  // 값비교
console.log(myVar01 === myVar03);  // 타입비교 + 값비교

console.log("========================");

// == : equality 값의 동치성, 형변환
console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10); // 11
console.log('abc' + new String('abc')); // abcabc
console.log(1 + '11'); // 111
console.log('11' + 1); // 111

console.log("========================");
// === : identity
// 1. 타입의 동일성
// 2. 타입이 같은경우
//      2-1(primitive type): 값의 동일성
//      2-2(object type): 객체의 동일성
console.log('4' === 4);
console.log(false === 0);
console.log('abc' === new String('abc'));

console.log('4' === 2);
console.log(new Number(10) === new Number(10));