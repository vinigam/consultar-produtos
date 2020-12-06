function dropdownMenu() {
	var x = document.getElementById("dropdownClick")
	if (x.className === "navbar-main") {
		x.className += " responsive";
	} else {
		x.className = "navbar-main";
	}
}
