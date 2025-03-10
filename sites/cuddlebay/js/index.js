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
	footifyTheFooter(document.getElementById(toDisp).clientHeight);
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

function footifyTheFooter(hh) {
	let body = document.querySelector('body');
	let footer = document.querySelector('footer');
	let header = document.querySelector('header').clientHeight;
	let nav = document.querySelector('nav').clientHeight;
	let kok = hh + header + nav;
	if ( body.clientHeight > kok) {
		footer.style.top = body.clientHeight - footer.clientHeight;
	} else {
		footer.style.top = kok + 10;
	}
}




window.onload = function() {
	switchTo('main');
	console.log('potato');
}