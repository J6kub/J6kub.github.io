let foot = document.querySelector('footer');
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index, and loop back to 0 after the last slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Start the slideshow


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
	section.style.display = "flex";
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
	showSec(gid('hotel'));
},100);