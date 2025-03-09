let pages = document.getElementsByClassName('pages');

function switchTo(toDisp) {
	Array.from(pages).forEach(function(el) {el.style.display = 'none';})
	
	document.getElementById(toDisp).style.display = "block";
}

window.onload = function() {
	switchTo('abtme');
	console.log('potato');
}