var jQuery = function(param) {
	if(typeof(param) === 'function') {
		window.addEventListener("load", param);
		return;
	}
	
	var elements;
	
	if(typeof(param) === 'string') {
		var elements = document.querySelectorAll(param);
		return new _jQuery(elements);
	}
	
	return new _jQuery(elements || []);
}

// prototype
var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < this.length; i++) {
		this[i] = elements[i];
	}
}

// constructor
_jQuery.prototype.click = function(handler) {
	for(var i = 0; i < this.length; i++) {
		this[i].addEventListener('click', handler);
	}
	return this;
}

_jQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.length; i++) {
		this[i].style[name] = value;
	}
	return this;
}

_jQuery.prototype.jquery = 'jquery.simple.0.0.1';

var $ = jQuery;