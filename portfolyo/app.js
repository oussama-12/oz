// variables

const hamburger_menu = document.querySelector(
	"#bars"
);
const navbar = document.querySelector("#navbar");

// add eventlistener

hamburger_menu.addEventListener("click", shownav);

// function

function shownav() {
	navbar.classList.toggle("shownav");
}
