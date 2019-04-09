
let LastSixteen = function(urug, port, fran, arge, braz, mexi, belg, japa, span, russ, hrva, dans, sved, svaj, kolu, engl) {
	this.urug = urug;
	this.port = port;
	this.fran = fran;
	this.arge = arge;
	this.braz = braz;
	this.mexi = mexi;
	this.belg = belg;
	this.japa = japa;
	this.span = span;
	this.russ = russ;
	this.hrva = hrva;
	this.dans = dans;
	this.sved = sved;
	this.svaj = svaj;
	this.kolu = kolu;
	this.engl = engl;
};

let givenGoals = new LastSixteen(2, 1, 4, 3, 2, 0, 3, 2, 1, 1, 1, 1, 1, 0, 1, 1);


// Urugvaj - Portugal
document.getElementById("goalsA1").innerHTML = givenGoals.urug;
document.getElementById("goalsA").innerHTML = givenGoals.urug;

document.getElementById("goalsB2").innerHTML = givenGoals.port;
document.getElementById("goalsB").innerHTML = givenGoals.port;

let extraTimes = new LastSixteen("", "", "", "" ,"", "", "", "", 0, 0, 0 ,0, "", "", 0, 0);
let penaltyShoots = new LastSixteen("", "", "", "" ,"", "", "", "", 3, 4, 3, 2, "", "", 3, 4);



if (givenGoals.urug > givenGoals.port) {
	document.getElementById("winner1").innerHTML = "Urugvaj";
	document.getElementById("win1").innerHTML = "Urugvaj";	
} else {
	document.getElementById("winner1").innerHTML = "Portugal";	
	document.getElementById("win1").innerHTML = "Portugal";		
}


// France - Argentina
document.getElementById("goalsC1").innerHTML = givenGoals.fran;
document.getElementById("goalsC").innerHTML = givenGoals.fran;

document.getElementById("goalsD2").innerHTML = givenGoals.arge;
document.getElementById("goalsD").innerHTML = givenGoals.arge;

if (givenGoals.fran > givenGoals.arge) {
	document.getElementById("winner2").innerHTML = "Francuska";
	document.getElementById("win2").innerHTML = "Francuska";	
} else {
	document.getElementById("winner2").innerHTML = "Argentina";	
	document.getElementById("winner2").innerHTML = "Argentina";		
}


// Brazil - Mexico
document.getElementById("goalsE1").innerHTML = givenGoals.braz;
document.getElementById("goalsE").innerHTML = givenGoals.braz;

document.getElementById("goalsF2").innerHTML = givenGoals.mexi;
document.getElementById("goalsF").innerHTML = givenGoals.mexi;

if (givenGoals.braz > givenGoals.mexi) {
	document.getElementById("winner3").innerHTML = "Brazil";
	document.getElementById("win3").innerHTML = "Brazil";	
} else {
	document.getElementById("winner3").innerHTML = "Meksiko";	
	document.getElementById("win3").innerHTML = "Meksiko";		
}

// Belgija - Japan
document.getElementById("goalsG1").innerHTML = givenGoals.belg;
document.getElementById("goalsG").innerHTML = givenGoals.japa;

document.getElementById("goalsH2").innerHTML = givenGoals.japa;
document.getElementById("goalsH").innerHTML = givenGoals.japa;

if (givenGoals.belg > givenGoals.japa) {
	document.getElementById("winner4").innerHTML = "Belgija";
	document.getElementById("win4").innerHTML = "Belgija";	
} else {
	document.getElementById("winner4").innerHTML = "Japan";	
	document.getElementById("win4").innerHTML = "Japan";		
}

// Španija - Rusija
document.getElementById("goalsB1").innerHTML = givenGoals.span;
document.getElementById("goalsBB").innerHTML = givenGoals.span;

document.getElementById("goalsA2").innerHTML = givenGoals.russ;
document.getElementById("goalsAA").innerHTML = givenGoals.russ;

if (givenGoals.span > givenGoals.russ) {
	document.getElementById("winner5").innerHTML = "Španija";
	document.getElementById("win5").innerHTML = "Španija";	
} else if (givenGoals.span < givenGoals.russ) {
	document.getElementById("winner5").innerHTML = "Rusija";	
	document.getElementById("win5").innerHTML = "Rusija";		
} else {
    if (penaltyShoots.span > penaltyShoots.russ) {
	document.getElementById("winner5").innerHTML = "Španija";
	document.getElementById("win5").innerHTML = "Španija";    	
    } else {
	document.getElementById("winner5").innerHTML = "Rusija";	
	document.getElementById("win5").innerHTML = "Rusija";    	
    } 
}

// Hrvatska - Danska
document.getElementById("goalsD1").innerHTML = givenGoals.hrva;
document.getElementById("goalsDD").innerHTML = givenGoals.hrva;

document.getElementById("goalsC2").innerHTML = givenGoals.dans;
document.getElementById("goalsCC").innerHTML = givenGoals.dans;

if (givenGoals.hrva > givenGoals.danss) {
	document.getElementById("winner6").innerHTML = "Hrvatska";
	document.getElementById("win6").innerHTML = "Hrvatska";	
} else if (givenGoals.span < givenGoals.russ) {
	document.getElementById("winner6").innerHTML = "Danska";	
	document.getElementById("win6").innerHTML = "Danska";		
} else {
    if (penaltyShoots.hrva > penaltyShoots.dans) {
	document.getElementById("winner6").innerHTML = "Hrvatska";
	document.getElementById("win6").innerHTML = "Hrvatska";    	
    } else {
	document.getElementById("winner6").innerHTML = "Danska";	
	document.getElementById("win6").innerHTML = "Danska";    	
    } 
}


// Švedska - Švajcarska
document.getElementById("goalsF1").innerHTML = givenGoals.sved;
document.getElementById("goalsFF").innerHTML = givenGoals.sved;

document.getElementById("goalsE2").innerHTML = givenGoals.svaj;
document.getElementById("goalsEE").innerHTML = givenGoals.svaj;

if (givenGoals.sved > givenGoals.svaj) {
	document.getElementById("winner7").innerHTML = "Švedska";
	document.getElementById("win7").innerHTML = "Švedska";	
} else {
	document.getElementById("winner7").innerHTML = "Švajcarska";	
	document.getElementById("win7").innerHTML = "Švajcarska";		
}


// Kolumbija - Engleska
document.getElementById("goalsH1").innerHTML = givenGoals.kolu;
document.getElementById("goalsHH").innerHTML = givenGoals.kolu;

document.getElementById("goalsG2").innerHTML = givenGoals.engl;
document.getElementById("goalsGG").innerHTML = givenGoals.engl;


	document.getElementById("winner8").innerHTML = "Engleska";
	document.getElementById("win8").innerHTML = "Engleska";	
