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

function bgSel(bg) {
	let body = document.querySelector('body');
	body.style.backgroundImage = "url('"+bg+"')"
}

window.onresize = function() {
	Array.from(pages).forEach(function(el) {
		if (el.style.display == 'block') {
			footifyTheFooter(el.clientHeight);
		}
	})
}


window.onload = function() {
	switchTo('main');
	bgSel("bg1.png");
	console.log('potato1');
}