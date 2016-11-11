function interval() {
setInterval(function() {document.getElementById('lapka1').style.opacity=1;},1000);
setInterval(function() {document.getElementById('lapka2').style.opacity=1;},2000);
setInterval(function() {document.getElementById('lapka3').style.opacity=1;},3000);
setInterval(function() {document.getElementById('lapka4').style.opacity=1;},4000);
setInterval(function() {document.getElementById('lapka5').style.opacity=1;},5000);
setInterval(function() {document.getElementById('lapka6').style.opacity=1;},6000);
}

function clear() {
	for (i=1, i<7, i++) {
		documnent.getElementById('lapka'+i).style.opacity = 0;
	}
}

function call() {
	interval();
	clear();
}