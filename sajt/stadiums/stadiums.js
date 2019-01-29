

$(".container").fadeIn(3000); 

window.onscroll = function() {
   myFunction()
};

let stic = document.getElementById("stick");
let sticky = stic.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		stic.classList.add("sticky")
  } else {
        stic.classList.remove("sticky");
  }
}

function lookingMouse() {
	document.getElementById("lookingBtn").style.border = "3px solid #333";
	document.getElementById("lookingBtn").style.boxShadow = "8px 8px 16px #333";	
	document.getElementById("lookingBtn").style.borderRadius = "10px";
}

function lookingOut() {
	document.getElementById("lookingBtn").style.border = "0";
	document.getElementById("lookingBtn").style.boxShadow = "4px 4px 8px #333";		
	document.getElementById("lookingBtn").style.borderRadius = "0";	
}

