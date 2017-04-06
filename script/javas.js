

var header = document.getElementById("header");
var navBar = document.getElementById("navbar");
var bg = document.getElementById("bg");
// Get the modal
var modal = document.getElementById('myModal');
var modallogin = document.getElementById('myModallogin');


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanlogin = document.getElementsByClassName("login-close")[0];

var navbarHeight = navBar.offsetHeight;
var headerHeight = header.offsetHeight;

header.style.height = screen.height-navbarHeight;

function initParallax(){
	if(window.pageYOffset > headerHeight){
		navBar.style.position = "fixed";
		navBar.style.top = "0";

	}else{
		navBar.style.position = "absolute";
		navBar.style.top = "0";
	}

	bg.style.top = -(window.pageYOffset/10)+"px";
}

window.addEventListener("scroll", initParallax);

function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
//document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
    modal.style.display = "block";

}
function login_show() {
    modallogin.style.display = "block";

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
   


    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
spanlogin.onclick = function(){
    modallogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction_mob() {
    document.getElementById("menu_mob").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_mob')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
