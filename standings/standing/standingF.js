function groupF() {
	document.getElementById("content").style.display = "none";
	$("#worldCupF").fadeIn(3000);

	document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";		
}

let Result3 = function(res1, res2, res3) {
	this.res1 = res1;
	this.res2 = res2;
	this.res3 = res3;
}

let nemRes = new Result3(0, 2, 0);
let svedRes = new Result3(1, 1, 3);
let mexRes = new Result3(1, 2, 0);
let jkorRes = new Result3(0, 1, 2);

document.getElementById("ne1").innerHTML = nemRes.res1;
document.getElementById("ne2").innerHTML = nemRes.res2;
document.getElementById("ne3").innerHTML = nemRes.res3;

document.getElementById("sve1").innerHTML = svedRes.res1;
document.getElementById("sve2").innerHTML = svedRes.res2;
document.getElementById("sve3").innerHTML = svedRes.res3;

document.getElementById("jk1").innerHTML = jkorRes.res1;
document.getElementById("jk2").innerHTML = jkorRes.res2;
document.getElementById("jk3").innerHTML = jkorRes.res3;

document.getElementById("me1").innerHTML = mexRes.res1;
document.getElementById("me2").innerHTML = mexRes.res2;
document.getElementById("me3").innerHTML = mexRes.res3;

let Standing3 = function(deu, mexico, sveden, skor) {
	this.deu = deu;
	this.mexico = mexico;
	this.sveden = sveden;
	this.skor = skor;
}

let points3 = new Standing3(3, 6, 6, 3);
let givGoals3 = new Standing3(2, 3, 5, 3);
let recGoals3 = new Standing3(4, 4, 2, 3);

document.getElementById("sved").innerHTML = points3.sveden;
document.getElementById("sved1").innerHTML = givGoals3.sveden;
document.getElementById("sved2").innerHTML = recGoals3.sveden;

document.getElementById("mex").innerHTML = points3.mexico;
document.getElementById("mex1").innerHTML = givGoals3.mexico;
document.getElementById("mex2").innerHTML = recGoals3.mexico;

document.getElementById("jkor").innerHTML = points3.skor;
document.getElementById("jkor1").innerHTML = givGoals3.skor;
document.getElementById("jkor2").innerHTML = recGoals3.skor;

document.getElementById("nem").innerHTML = points3.deu;
document.getElementById("nem1").innerHTML = givGoals3.deu;
document.getElementById("nem2").innerHTML = recGoals3.deu;

document.getElementById("winnerF").innerHTML = "Švedska"
document.getElementById("secondF").innerHTML = "Meksiko";