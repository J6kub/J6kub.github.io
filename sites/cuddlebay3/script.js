let foot = document.querySelector('footer');
let slideIndex = 0;

// Daycare slideshow
function startSlideshow(containerSelector) {
    let index = 0;
    const slides = document.querySelectorAll(containerSelector + ' .slide');

    function show() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        index++;
        if (index > slides.length) { index = 1; }
        if (slides.length > 0) {
            slides[index-1].style.display = "block";  
        }
    }

    show(); // Show first slide immediately
    setInterval(show, 3000); // Then every 3 seconds
}

// Start both slideshows independently
//startSlideshow('.careslides');
//startSlideshow('.hotelslides');


function AdjustStyleSheet() {
    let styleEl = document.getElementById('variable_style');
		if (window.innerWidth < window.innerHeight) {
		// Phone
	} else if (window.innerHeight < 720) {
		styleEl.href = "styles_lowres.css";
	} else {
		styleEl.href = "styles.css";
	}
	relocateFooter();
}

function relocateFooter() {
	
	foot.style.top = getDocumentHeight() - (foot.clientHeight*1.5) + "px";
}

function updateColorOf(parent, gideon, csEl) {
	let root = document.documentElement;
	root.style.setProperty(csEl,parent.value);
	gid(gideon).value = parent.value;
}

function getDocumentHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
}

let sections = document.querySelectorAll('section');


function showSec(section) {
	Array.from(sections).forEach(function(el) {el.style.display = 'none'})
	section.style.display = "block";
}
function gid(id) {
	return document.getElementById(id);
}

window.onresize = function() {
	AdjustStyleSheet();
}
window.onload = function() {
	AdjustStyleSheet();
	relocateFooter();
	showSec(sections[0])
	
	showSlides();

// Repeat the slideshow every 4 seconds (4000 milliseconds)
	let abcs = setInterval(showSlides, 4000);

}
foot.onload = setTimeout(function() {
	relocateFooter();
	//showSec(gid('hotel'));
},100);