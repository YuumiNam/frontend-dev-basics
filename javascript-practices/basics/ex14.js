/*
URL 다루기
*/

var url = 'http://www.mysite.com/user?name=둘리&no=10&email=dooli@gmail.com';

// 1. escape: URL전부를 encoding해버림 (추천x)
var url2 = escape(url);
console.log("escape : " + url2);

// 2. encodeURI: URL중 파라미터만 encoding (추천o), URL전체를 encoding해야할때는 이것
var url3 = encodeURI(url);
console.log("encodeURL : " + url3);

// 3. encodeURIComponent: 값만 encoding해야하는 경우 추천, URL전체가 아닌 특정값만 encoding해야할때는 이것
// 잘못 사용한경우
var url4 = encodeURIComponent(url);
console.log("encodeURLComponent : " + url4);

// 4.
// 만들어야할 URL
// http://www.mysite.com/user?name=둘리&no=10&email=dooli@gmail.com
var url = 'http://www.mysite.com/user'
var formData = {
    no: 10,
    name: '둘리',
    email: 'dooli@gmail.com'
}

var toQueryString = function(o) {
    var qs = [];

    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

// 사용예1
var url5 = url + "?" + toQueryString(formData);
console.log(url5);

// 사용예2
// jQuery.ajax({
//     url: "",
//     type: "post",
//     data: toQueryString(formData)
// });