var popup = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");

popup.addEventListener("click", function(event) {
	event.preventDefault();
	modalMap.classList.add("modal-show");
	overlay.classList.add("overlay-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	modalMap.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
	event.preventDefault();
	if (event.keyCode === 27) {
		if (modalMap.classList.contains("modal-show")) {
			modalMap.classList.remove("modal-show");
			overlay.classList.remove("overlay-show");
		}
	}
})