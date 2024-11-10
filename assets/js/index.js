const body = document.querySelector('body');
const minY = 250
let yPos = minY;

function rr(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD",
    "#E74C3C", "#3498DB", "#2ECC71", "#F39C12", "#D35400",
    "#1ABC9C", "#9B59B6", "#34495E", "#2C3E50", "#E67E22",
    "#F1C40F", "#16A085", "#2980B9", "#C0392B", "#7D3C98"
];

let boxes = Array.from(document.getElementsByClassName('boxy'));
let pop_ups = Array.from(document.getElementsByClassName('pop_up'));
boxes.forEach(function(elm, i) {
    elm.style.backgroundColor = colors[i];
    //elm.innerHTML = "<h1>This is slide nr. " + i + "</h1>" + elm.innerHTML;
});
pop_ups.forEach(function(elm,i){
	elm.addEventListener('drag',function(evt){
		console.log(evt);
		if (evt.pageY > 0 && evt.pageX > 0) {
			elm.style.top = evt.pageY;
			elm.style.left = evt.pageX;
		}
	})
})

body.addEventListener('wheel', function(event) {
    yPos += event.deltaY * 0.1; // Adjust the multiplier for smoother scrolling
    if (yPos < minY) yPos = minY;

    for (let i = 0; i < boxes.length; i++) {
        visiblify(boxes[i], (i + 1) * 150); // Change to 100 for visibility checks
	}
});

function reppi(n) {
    return Math.max(0, -n + 100); // Ensure opacity doesn't go below 0
}

function visiblify(elm, at) {
    if (yPos > at && yPos < at + 100) {
		elm.style.opacity = (yPos - at) + "%"
		
	} else {
		elm.style.opacity = (yPos - at) + "0%"
		elm.style.zIndex = 0
	}
	if (yPos > at + 100 && yPos < at + 200) {
		elm.style.zIndex = 1;
	} else {
		elm.style.zIndex = 0;
	}
}
function pop_up_visibilize(elm) {
	let pops = Array.from(elm.closest('.boxy').getElementsByClassName('pop_up'));
	console.log(pops);
	for (let i=0; i < pops.length; i++) {
		let curr = pops[i].hidden;
		console.log(curr);
		if (curr) {
			pops[i].hidden = '';
			let p = pops[i];
			pops[i].style.left = rr(p.clientWidth/2,window.innerWidth)
			pops[i].style.top = rr(p.clientHeight/2,window.innerHeight)
			break;
		}
	}
}
