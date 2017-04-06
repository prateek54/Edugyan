var myVar;


function showPage() {
	document.body.removeChild(load_screen);
}

window.addEventListener("load", function () {
	var load_screen = document.getElementById("load_screen");
	myVar = setTimeout(showPage, 700);

});
