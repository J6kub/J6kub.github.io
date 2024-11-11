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
	elm.dragLimit = 0;
	elm.addEventListener('drag',function(evt){
		//console.log(evt);
		if (evt.pageY > 0 && evt.pageX > 0 && elm.draggable) {
			elm.style.top = evt.pageY;
			elm.style.left = evt.pageX;
		}
		elm.dragLimit += 1
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
function pop_up_visibilize(elm) {		// pop_up_visibilize(this) to show popups from window
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

let lmt_pop = document.getElementById('limited_pop')
lmt_pop.addEventListener('drag',function(e){
	console.log(this.dragLimit)
	if (this.dragLimit > 300) {
		console.log(this.draggable)
		this.draggable = false;
		const dragStopEvent = new Event('dragstop');
        this.dispatchEvent(dragStopEvent)
		let limit_up = this.closest('.boxy').getElementsByClassName('pop_up')[1];
		limit_up.hidden = '';
		limit_up.draggable = false;
		this.style.cursor = 'not-allowed;'
	}
});
lmt_pop.addEventListener("click",function(){
	if (!this.draggable) {
		let limit_up = this.closest('.boxy').getElementsByClassName('pop_up')[1];
		limit_up.hidden = '';
	}
})

clr_sel = document.getElementById('clr_sel');
function clr_sel_updt() {
	thisEl = clr_sel;
	thisEl.style.backgroundColor = thisEl.value;
	function rpc(hex) {
		hex = hex.replace(/^#/, '');
		// Parse the hex values
		let bigint = parseInt(hex, 16);
		
		// Extract RGB components
		let r = (bigint >> 16) & 255;
		let g = (bigint >> 8) & 255;
		let b = bigint & 255;
		
		// Return the RGB values as an object
		return [ -r + 255, -g + 255, -b + 255 ];
	}
	thisEl.parentElement.style.color = 'rgb(' + rpc(thisEl.value) + ")";
	thisEl.style.backgroundColor = 'rgb(' + rpc(thisEl.value) + ")";
	thisEl.closest('.boxy').style.backgroundColor = thisEl.value;
}
clr_sel.addEventListener("input",clr_sel_updt);
