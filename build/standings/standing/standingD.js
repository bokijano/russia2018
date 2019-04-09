function groupD() {
	document.getElementById("content").style.display = "none";
	$("#worldCupD").fadeIn(3000);

	document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupC").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";	
}

let Result1 = function(res1, res2, res3) {
	this.res1 = res1;
	this.res2 = res2;
	this.res3 = res3;
};

let argRes = new Result1(1, 0, 2);
let icelRes = new Result1(1, 0, 1);
let croRes = new Result1(2, 3, 2);
let nigRes = new Result1(0, 2, 1);

document.getElementById("ar1").innerHTML = argRes.res1;
document.getElementById("ar2").innerHTML = argRes.res2;
document.getElementById("ar3").innerHTML = argRes.res3;

document.getElementById("is1").innerHTML = icelRes.res1;
document.getElementById("is2").innerHTML = icelRes.res2;
document.getElementById("is3").innerHTML = icelRes.res3;

document.getElementById("hr1").innerHTML = croRes.res1;
document.getElementById("hr2").innerHTML = croRes.res2;
document.getElementById("hr3").innerHTML = croRes.res3;

document.getElementById("ni1").innerHTML = nigRes.res1;
document.getElementById("ni2").innerHTML = nigRes.res2;
document.getElementById("ni3").innerHTML = nigRes.res3;	

let Standing1 = function(argen, icela, croat, niger) {
	this.argen = argen;
	this.icela = icela;
	this.croat = croat;
	this.niger = niger;
}

let points1 = new Standing1(4, 1, 9, 3);
let givGoals1 = new Standing1(3, 2, 7, 3);
let recGoals1 = new Standing1(5, 5, 1, 4);

document.getElementById("cro").innerHTML = points1.croat;
document.getElementById("cro1").innerHTML = givGoals1.croat;
document.getElementById("cro2").innerHTML = recGoals1.croat;

document.getElementById("arg").innerHTML = points1.argen;
document.getElementById("arg1").innerHTML = givGoals1.argen;
document.getElementById("arg2").innerHTML = recGoals1.argen;

document.getElementById("ice").innerHTML = points1.icela;
document.getElementById("ice1").innerHTML = givGoals1.icela;
document.getElementById("ice2").innerHTML = recGoals1.icela;


document.getElementById("nig").innerHTML = points1.niger;
document.getElementById("nig1").innerHTML = givGoals1.niger;
document.getElementById("nig2").innerHTML = recGoals1.niger;

if (points1.croat > points1.argen && points1.croat > points1.icela && points1.croat > points1.niger) {
	document.getElementById("winnerD").innerHTML = "Hrvatska";

	if (points1.argen > points1.icela && points1.argen > points1.niger) {
		document.getElementById("secondD").innerHTML = "Argentina";
	} else if (points1.icela > points1.argen && points1.icela > points1.niger) {
		document.getElementById("secondD").innerHTML = "Island";		
	} else {
		document.getElementById("secondD").innerHTML = "Nigerija";		
	}
}