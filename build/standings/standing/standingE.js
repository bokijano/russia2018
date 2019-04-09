function groupE() {
	document.getElementById("content").style.display = "none";
	$("#worldCupE").fadeIn(3000);

	document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";	
}

let Result2 = function(res1, res2, res3) {
	this.res1 = res1;
	this.res2 = res2;
	this.res3 = res3;
}

let braRes = new Result2(1, 2, 2);
let svitRes = new Result2(1, 2, 2);
let serbRes = new Result2(1, 1, 0);
let costRes = new Result2(0, 0, 2);

document.getElementById("br1").innerHTML = braRes.res1;
document.getElementById("br2").innerHTML = braRes.res2;
document.getElementById("br3").innerHTML = braRes.res3;

document.getElementById("sr1").innerHTML = serbRes.res1;
document.getElementById("sr2").innerHTML = serbRes.res2;
document.getElementById("sr3").innerHTML = serbRes.res3;

document.getElementById("ko1").innerHTML = costRes.res1;
document.getElementById("ko2").innerHTML = costRes.res2;
document.getElementById("ko3").innerHTML = costRes.res3;

document.getElementById("sv1").innerHTML = svitRes.res1;
document.getElementById("sv2").innerHTML = svitRes.res2;
document.getElementById("sv3").innerHTML = svitRes.res3;

let Standing2 = function(brazil, svitc, serbia, costa) {
	this.brazil = brazil;
	this.svitc = svitc;
	this.serbia = serbia;
	this.costa = costa;
}

let points2 = new Standing2(7, 5, 3, 1);
let givGoals2 = new Standing2(5, 5, 2, 2);
let recGoals2 = new Standing2(1, 4, 4, 5);

document.getElementById("bra").innerHTML = points2.brazil;
document.getElementById("bra1").innerHTML = givGoals2.brazil;
document.getElementById("bra2").innerHTML = recGoals2.brazil;

document.getElementById("svi").innerHTML = points2.svitc;
document.getElementById("svi1").innerHTML = givGoals2.svitc;
document.getElementById("svi2").innerHTML = recGoals2.svitc;

document.getElementById("srb").innerHTML = points2.serbia;
document.getElementById("srb1").innerHTML = givGoals2.serbia;
document.getElementById("srb2").innerHTML = recGoals2.serbia;

document.getElementById("kos").innerHTML = points2.costa;
document.getElementById("kos1").innerHTML = givGoals2.costa;
document.getElementById("kos2").innerHTML = recGoals2.costa;

if (points2.brazil > points2.svitc && points2.brazil > points2.serbia && points2.brazil > points2.costa) {
	document.getElementById("winnerE").innerHTML = "Brazil";

	if (points2.svitc > points2.serbia && points2.svitc > points2.costa) {
		document.getElementById("secondE").innerHTML = "Švajcarska";
	} else if (points2.serbia > points2.svitc && points2.serbia > points2.costa) {
		document.getElementById("secondE").innerHTML = "Srbija";		
	} else {
		document.getElementById("secondE").innerHTML = "Kostarika";		
	}
}