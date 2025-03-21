let foot = document.querySelector('footer');
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let slideContainer = document.querySelector(".slideshow");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});

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

}
foot.onload = setTimeout(function() {relocateFooter()},100);