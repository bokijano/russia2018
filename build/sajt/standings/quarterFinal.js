
let QuarterFinal = function(urugvaj, francuska, brazil, belgija, rusija, hrvatska, svedska, engleska) {
	this.urugvaj = urugvaj;
	this.francuska = francuska;
	this.brazil = brazil;
	this.belgija = belgija;
	this.rusija = rusija;
	this.hrvatska = hrvatska;
	this.svedska = svedska;
	this.engleska = engleska;
}

let result = new QuarterFinal(0, 2, 1, 2, 2, 2, 0, 2);

document.getElementById("goals1").innerHTML = result.urugvaj; 
document.getElementById("goalsq1").innerHTML = result.urugvaj; 

document.getElementById("goals2").innerHTML = result.francuska; 
document.getElementById("goalsq2").innerHTML = result.francuska; 

document.getElementById("goals3").innerHTML = result.brazil; 
document.getElementById("goalsq3").innerHTML = result.brazil; 

document.getElementById("goals4").innerHTML = result.belgija; 
document.getElementById("goalsq4").innerHTML = result.belgija; 

document.getElementById("goals5").innerHTML = result.rusija; 
document.getElementById("goalsq5").innerHTML = result.rusija; 

document.getElementById("goals6").innerHTML = result.hrvatska; 
document.getElementById("goalsq6").innerHTML = result.hrvatska;

document.getElementById("goals7").innerHTML = result.svedska; 
document.getElementById("goalsq7").innerHTML = result.svedska; 

document.getElementById("goals8").innerHTML = result.engleska; 
document.getElementById("goalsq8").innerHTML = result.engleska;  