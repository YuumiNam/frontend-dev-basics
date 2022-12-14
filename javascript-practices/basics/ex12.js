/*
Array 확장(prototype기반의 확장)

*/

// removeAt()
Array.prototype.removeAt = function(index) {
    this.splice(index, 1);
}

var a = [1, 2, 4];
console.log(a);

a.removeAt(2);
console.log(a);



// insertAt()
Array.prototype.insertAt = function(index, value) {
    if(value instanceof Array) {
        // for(let i = 0; i < value.length; i++) {
        //     this.splice(index+i, 0, value[i]);
        // }

        // console.log("this : " + this);
        
        // 오류!!
        // 콜백함수 안의 this는 어휘상의 this와 일치하지 않는다
        // value.forEach(function(e){
        //     console.log("this : " + this);
        //     this.splice(index++, 0, e);
        // });

        // 해결방법1 
        // var _this = this;
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });

        // 해결방법2
        // Function.prototype.bind() 함수를 사용
        // 함수에 bind()를 써서 함수 실행블록 안의 this를 세팅할 수 있다
        value.forEach(function(e){
            this.splice(index++, 0, e);
        }.bind(this));
    } else {
        this.splice(index, 0, value);
    }
}

var a = [1, 2, 4];
console.log(a);
a.insertAt(2, 3);
console.log(a);

a.removeAt(2)
console.log(a);

a.insertAt(2, ['a', 'b', 'c']);
console.log(a);