var onTabClicked = function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	var ul = divTabBox.childNodes[1];
	var lis = ul.getElementsByClassName('selected');
	
	(lis.length == 1) && (lis[0].className = "");
	
	this.className = "selected";
}

window.addEventListener('load', function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	var ul = divTabBox.childNodes[1]; // 첫번째-textnode, 두번째-ul, 세번째-ul의 textnode, 네번째-li
	var lis = ul.getElementsByTagName('li');
	
	// lis는 배열이 아닌 유사배열
	Array.prototype.forEach.call(lis, function(li) {
		li.addEventListener('click', onTabClicked);
	});
});