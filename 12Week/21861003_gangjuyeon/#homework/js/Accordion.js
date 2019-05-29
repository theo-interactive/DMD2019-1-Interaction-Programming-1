const slot = document.querySelectorAll(".slot");
const text = document.querySelectorAll("p");

function activate(e){
	slot.forEach(panel => panel.classList.contains("active") ? panel.classList.remove("active") : "");
	this.classList.toggle("active");
	// console.log(e.propertyName);
}

function slideIn(e){
	// console.log(e.propertyName);
	if(e.propertyName.includes("flex")){
		this.classList.toggle("open-active");
	}
}


slot.forEach(s => s.addEventListener("click", activate));
slot.forEach(s => s.addEventListener("transitionend", slideIn));

