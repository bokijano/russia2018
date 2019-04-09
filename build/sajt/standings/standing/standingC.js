function groupC() {
	document.getElementById("content").style.display = "none";
	$("#worldCupC").fadeIn(3000);

	document.getElementById("worldCupA").style.display = "none";
	document.getElementById("worldCupB").style.display = "none";
	document.getElementById("worldCupD").style.display = "none";
	document.getElementById("worldCupE").style.display = "none";
	document.getElementById("worldCupF").style.display = "none";
	document.getElementById("worldCupG").style.display = "none";
	document.getElementById("worldCupH").style.display = "none";		
}

let Result = function(res1, res2, res3) {
	this.res1 = res1;
	this.res2 = res2;
	this.res3 = res3;
}

let franceRes = new Result(2, 1, 0);
let austrRes = new Result(1, 1, 0);
let peruRes = new Result(0, 0, 2);
let denRes = new Result (1, 1, 0);

document.getElementById("fr1").innerHTML = franceRes.res1;
document.getElementById("fr2").innerHTML = franceRes.res2;
document.getElementById("fr3").innerHTML = franceRes.res3;

document.getElementById("per1").innerHTML = peruRes.res1;
document.getElementById("per2").innerHTML = peruRes.res2;
document.getElementById("per3").innerHTML = peruRes.res3;

document.getElementById("aus1").innerHTML = austrRes.res1;
document.getElementById("aus2").innerHTML = austrRes.res2;
document.getElementById("aus3").innerHTML = austrRes.res3;

document.getElementById("d1").innerHTML = denRes.res1;
document.getElementById("d2").innerHTML = denRes.res2;
document.getElementById("d3").innerHTML = denRes.res3;	

let Standing = function(fran, aust, per, dan) {
	this.fran = fran;
	this.aust = aust;
	this.per = per;
	this.dan = dan;
}

let points = new Standing(7, 1, 3, 5);
let givGoals = new Standing(3, 2, 2, 2);
let recGoals = new Standing(1, 5, 2, 1);

document.getElementById("france").innerHTML = points.fran;
document.getElementById("france1").innerHTML = givGoals.fran;
document.getElementById("france2").innerHTML = recGoals.fran;

document.getElementById("austr").innerHTML = points.aust;
document.getElementById("austr1").innerHTML = givGoals.aust;
document.getElementById("austr2").innerHTML = recGoals.aust;

document.getElementById("peru").innerHTML = points.per;
document.getElementById("peru1").innerHTML = givGoals.per;
document.getElementById("peru2").innerHTML = recGoals.per;

document.getElementById("den").innerHTML = points.dan;
document.getElementById("den1").innerHTML = givGoals.dan;
document.getElementById("den2").innerHTML = recGoals.dan;

if (points.fran > points.aust && points.fran > points.per && points.fran > points.dan) {
	document.getElementById("winnerC").innerHTML = "Francuska";

	if (points.aust > points.per && points.aust > points.dan) {
		document.getElementById("secondC").innerHTML = "Australija";
	} else if (points.per > points.dan && points.per > points.aust) {
		document.getElementById("secondC").innerHTML = "Peru";		
	} else {
		document.getElementById("secondC").innerHTML = "Danska";		
	}
}