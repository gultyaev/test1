function lapka1() {
	"use strict";
	document.getElementById("lapka1").style.opacity=1;
}
function lapka2() {
	"use strict";
	document.getElementById("lapka2").style.opacity=1;
}
function lapka3() {
	"use strict";
	document.getElementById("lapka3").style.opacity=1;
}
function lapka4() {
	"use strict";
	document.getElementById("lapka4").style.opacity=1;
}
function lapka5() {
	"use strict";
	document.getElementById("lapka5").style.opacity=1;
}
function lapka6() {
	"use strict";
	document.getElementById("lapka6").style.opacity=1;
}
function reset(){
	"use strict";
	var i = 0;
	var lapka = document.getElementsByClassName("lapka-img");
	for (i; i < 6; i++) {
		lapka[i].style.opacity = 0;
	}
}

function call() {
	setTimeout(function() {lapka1},1000);
	setTimeout(lapka2,2000);
	setTimeout(lapka3,3000);
	setTimeout(lapka4,4000);
	setTimeout(lapka5,5000);
	setTimeout(lapka6,6000);
	setTimeout(reset,7000);
}

function call_me() {
	call();
	setInterval(call,7000);
}