

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

