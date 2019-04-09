$("#content").fadeIn(3000);

window.onscroll = function() {
	myFunction()
};

let st = document.getElementById("stick");
let sticky = st.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		st.classList.add("sticky");
	} else {
		st.classList.remove("sticky");		
	}
}