var oHtml = document.documentElement;

function getSize(){
	var screenWidth = oHtml.clientWidth;
	if (screenWidth < 320) {
		oHtml.style.fontSize = '40px';
	} else if (screenWidth > 720) {
		oHtml.style.fontSize = '90px';
	} else {
		oHtml.style.fontSize = screenWidth/(320/40) + 'px';
	}
	
}

getSize();

window.onresize = function(){
	getSize();
}