
let SemiFinals = function(france, belgium, croatia, england) {
	this.france = france;
	this.belgium = belgium;
	this.croatia = croatia;
	this.england = england;
}

let semiGoals = new SemiFinals(1, 0, 1, 1);
let semiExtra = new SemiFinals("", "", 1, 0);
let semiPenalty = new SemiFinals("", "", "", "");

document.getElementById("goalss1").innerHTML = semiGoals.france;
document.getElementById("goals111").innerHTML = semiGoals.france; 

document.getElementById("goalss2").innerHTML = semiGoals.belgium;
document.getElementById("goals211").innerHTML = semiGoals.belgium;

if (semiGoals.france > semiGoals.belgium) {
	document.getElementById("winner12").innerHTML = "Francuska";
	document.getElementById("winner121").innerHTML = "Francuska";
	document.getElementById("second11").innerHTML = "Belgija";
	document.getElementById("second111").innerHTML = "Belgija";		
} else if (semiGoals.france < semiGoals.belgium) {
	document.getElementById("winner12").innerHTML = "Belgija";
	document.getElementById("winner121").innerHTML = "Belgija";
	document.getElementById("second11").innerHTML = "Francuska";
	document.getElementById("second111").innerHTML = "Francuska";		
} else {
if (semiExtra.france > semiExtra.belgium) {
	document.getElementById("winner12").innerHTML = "Francuska";
	document.getElementById("winner121").innerHTML = "Francuska";
	document.getElementById("second11").innerHTML = "Belgija";
	document.getElementById("second111").innerHTML = "Belgija";		
} else if (semiExtra.france < semiExtra.belgium) {
	document.getElementById("winner12").innerHTML = "Belgija";
	document.getElementById("winner121").innerHTML = "Belgija";
	document.getElementById("second11").innerHTML = "Francuska";
	document.getElementById("second111").innerHTML = "Francuska";	
} else {
if (semiPenalty.france > semiPenalty.belgium) {
	document.getElementById("winner12").innerHTML = "Francuska";
	document.getElementById("winner121").innerHTML = "Francuska";
	document.getElementById("second11").innerHTML = "Belgija";
	document.getElementById("second111").innerHTML = "Belgija";		
} else {
	document.getElementById("winner12").innerHTML = "Belgija";
	document.getElementById("winner121").innerHTML = "Belgija";
	document.getElementById("second11").innerHTML = "Francuska";
	document.getElementById("second111").innerHTML = "Francuska";	
}
}
}



document.getElementById("goalss3").innerHTML = semiGoals.croatia + semiExtra.croatia;
document.getElementById("goals311").innerHTML = semiGoals.croatia + semiExtra.croatia; 

document.getElementById("goalss4").innerHTML = semiGoals.england + semiExtra.england;
document.getElementById("goals411").innerHTML = semiGoals.england + semiExtra.england;

if (semiGoals.croatia > semiGoals.england) {
	document.getElementById("winner22").innerHTML = "Hrvatska";
	document.getElementById("winner221").innerHTML = "Hrvatska";
	document.getElementById("second21").innerHTML = "Engleska";
	document.getElementById("second211").innerHTML = "Engleska";		
} else if (semiGoals.croatia < semiGoals.england) {
	document.getElementById("winner22").innerHTML = "Engleska";
	document.getElementById("winner221").innerHTML = "Engleska";
	document.getElementById("second21").innerHTML = "Hrvatska";
	document.getElementById("second211").innerHTML = "Hrvatska";		
} else {
if (semiExtra.croatia > semiExtra.england) {
	document.getElementById("winner22").innerHTML = "Hrvatska";
	document.getElementById("winner221").innerHTML = "Hrvatska";
	document.getElementById("second21").innerHTML = "Engleska";
	document.getElementById("second211").innerHTML = "Engleska";		
} else if (semiExtra.croatia < semiExtra.england) {
	document.getElementById("winner22").innerHTML = "Engleska";
	document.getElementById("winner221").innerHTML = "Engleska";
	document.getElementById("second21").innerHTML = "Hrvatska";
	document.getElementById("second211").innerHTML = "Hrvatska";
} else {
if (semiPenalty.croatia > semiPenalty.england) {
	document.getElementById("winner22").innerHTML = "Hrvatska";
	document.getElementById("winner221").innerHTML = "Hrvatska";
	document.getElementById("second21").innerHTML = "Engleska";
	document.getElementById("second211").innerHTML = "Engleska";		
} else {
	document.getElementById("winner22").innerHTML = "Engleska";
	document.getElementById("winner221").innerHTML = "Engleska";
	document.getElementById("second21").innerHTML = "Hrvatska";
	document.getElementById("second211").innerHTML = "Hrvatska";	
}
}
}  