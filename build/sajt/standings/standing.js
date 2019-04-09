
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

function last16() {
	document.getElementById("content").style.display = "none";
	$("#WCupLast16").fadeIn(3000);

    document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";	
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";

	document.getElementById("WCupQuarterFinals").style.display = "none";
	document.getElementById("WCupSemiFinals").style.display = "none";
	document.getElementById("final").style.display = "none";			
}

function quarterFinals() {
	document.getElementById("content").style.display = "none";
	$("#WCupQuarterFinals").fadeIn(3000);

    document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";	
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";

	document.getElementById("WCupLast16").style.display = "none";
	document.getElementById("WCupSemiFinals").style.display = "none";
	document.getElementById("final").style.display = "none";		
}

function semiFinals() {
	document.getElementById("content").style.display = "none";
	$("#WCupSemiFinals").fadeIn(3000);

    document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";	
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";

	document.getElementById("WCupLast16").style.display = "none";
	document.getElementById("WCupQuarterFinals").style.display = "none";
	document.getElementById("final").style.display = "none";	
}

function final() {
	document.getElementById("content").style.display = "none";
	$("#WCupFinal").fadeIn(3000);

    document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";	
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";

	document.getElementById("WCupLast16").style.display = "none";
	document.getElementById("WCupQuarterFinals").style.display = "none";
	document.getElementById("WCupSemiFinals").style.display = "none";			
}