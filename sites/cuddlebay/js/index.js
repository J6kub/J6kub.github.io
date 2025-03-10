let pages = document.getElementsByClassName('pages');

function switchTo(toDisp) {
	Array.from(pages).forEach(function(el) {el.style.display = 'none';})
	if (toDisp == "main") {
		navigationDeletation("none");
		topReplace(false);
	} else {
		navigationDeletation("block");
		topReplace(true);
	}
	document.getElementById(toDisp).style.display = "block";
}
function navigationDeletation(booly) {
	let nav = document.querySelector("nav");
	nav.style.display = booly;
}

function topReplace(booly) {
	str = "<text>Trusted In-home Pet Care</text><br><text id='hhi'>Love, safety and a lot of cuddles guaranteed.</text>";
	toppex = document.getElementById('toppex');
	
	if (booly) {
		toppex.innerHTML = str;
	} else {
		toppex.innerHTML = '<text style="font-size:128">Cuddle Bay</text>';
	}
}




window.onload = function() {
	switchTo('main');
	console.log('potato');
}