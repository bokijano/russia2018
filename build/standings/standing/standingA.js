function groupA() {
	document.getElementById("content").style.display = "none";
                  
	$("#worldCupA").fadeIn(3000);

    document.getElementById("worldCupB").style.display = "none";
    document.getElementById("worldCupC").style.display = "none";
    document.getElementById("worldCupD").style.display = "none";
    document.getElementById("worldCupE").style.display = "none";
    document.getElementById("worldCupF").style.display = "none";
    document.getElementById("worldCupG").style.display = "none";
    document.getElementById("worldCupH").style.display = "none";        


//Rusija (a) - Saudijska Arabija (b)
    let a1 = 5;
    let b1 = 0;

    document.getElementById("r1").innerHTML = a1;
    document.getElementById("sa1").innerHTML = b1;


    let russ = 0;
    let saud = 0;
    let egip = 0;
    let urug = 0;
    if (a1 > b1) {
    	russ = russ + 3;
    	document.getElementById("rus").innerHTML = russ;
    	document.getElementById("saudi").innerHTML = saud;    	
    } else if (a1 === b1) {
    	russ = russ + 1;
    	saud = saud + 1;
    	document.getElementById("rus").innerHTML = russ;
    	document.getElementById("saudi").innerHTML = saud;       	
    } else {
    	saud = saud + 3;
    	document.getElementById("rus").innerHTML = russ;
    	document.getElementById("saudi").innerHTML = saud;      	
    }

// Egipat (c) - Urugvaj (d)
    let c1 = 0;
    let d1 = 1; 

    document.getElementById("e1").innerHTML = c1;
    document.getElementById("u1").innerHTML = d1;

    if (c1 > d1) {
    	egip = egip + 3;
    	document.getElementById("egi").innerHTML = egip;
    	document.getElementById("uru").innerHTML = urug;    	
    } else if (c1 === d1) {
    	egip = egip + 1;
    	urug = urug + 1;
    	document.getElementById("egi").innerHTML = egip;
    	document.getElementById("uru").innerHTML = urug;       	
    } else {
    	urug = urug + 3;
    	document.getElementById("egi").innerHTML = egip;
    	document.getElementById("uru").innerHTML = urug; 
     	
    }
// Rusija (a) - Egipat (c)
    let a2 = 3;
    let c2 = 1;

    document.getElementById("r2").innerHTML = a2;
    document.getElementById("e2").innerHTML = c2;

    if (a2 > c2) {
    	russ = russ + 3;
    	document.getElementById("rus").innerHTML = russ;
    	document.getElementById("egi").innerHTML = egip;   	
    } else if (a2 === c2) {
    	russ = russ + 1;
    	egip = egip + 1;
    	document.getElementById("rus").innerHTML = russ;
    	document.getElementById("egi").innerHTML = egip;        	
    } else {
    	egip = egip + 3;
    	document.getElementById("rus").innerHTML = russ;
    	document.getElementById("egi").innerHTML = egip;        	
    }
// Urugvaj (d) - Saudijska Arabija (b)
    let d2 = 1;
    let b2 = 0;

    document.getElementById("u2").innerHTML = d2;
    document.getElementById("sa2").innerHTML = b2;

    if (d2 > b2) {
    	urug = urug + 3;
    	document.getElementById("uru").innerHTML = urug;
    	document.getElementById("saudi").innerHTML = saud;    	
    } else if (d2 === b2) {
    	urug = urug + 1;
    	saud = saud + 1;
    	document.getElementById("uru").innerHTML = urug;
    	document.getElementById("saudi").innerHTML = saud;       	
    } else {
    	saud = saud + 3;
    	document.getElementById("uru").innerHTML = urug;
    	document.getElementById("saudi").innerHTML = saud;        	
    }
// Urugvaj (d) - Rusija (a)
    let d3 = 3;
    let a3 = 0; 

    document.getElementById("u3").innerHTML = d3;
    document.getElementById("r3").innerHTML = a3;

    if (d3 > a3) {
    	urug = urug + 3;
    	document.getElementById("uru").innerHTML = urug;
    	document.getElementById("rus").innerHTML = russ;  	
    } else if (d3 === a3) {
    	russ = russ + 1;
    	urug = urug + 1;
    	document.getElementById("uru").innerHTML = urug;
    	document.getElementById("rus").innerHTML = russ;        	
    } else {
    	russ = russ + 3;
    	document.getElementById("uru").innerHTML = urug;
    	document.getElementById("rus").innerHTML = russ;     	
    }
// Saudijska Arabija (b) - Egipat (c) 
    let b3 = 2;
    let c3 = 1;

    document.getElementById("e3").innerHTML = c3;
    document.getElementById("sa3").innerHTML = b3;

    if (b3 > c3) {
    	saud = saud + 3;
    	document.getElementById("egi").innerHTML = egip;  
    	document.getElementById("saudi").innerHTML = saud;    	
    } else if (b3 === c3) {
    	egip = egip + 1;
    	saud = saud + 1;
    	document.getElementById("egi").innerHTML = egip;  
    	document.getElementById("saudi").innerHTML = saud;       	
    } else {
    	egip = egip + 3;
    	document.getElementById("egi").innerHTML = egip;  
    	document.getElementById("saudi").innerHTML = saud;      	
    }

    document.getElementById("rus1").innerHTML = a1 + a2 + a3;
    document.getElementById("rus2").innerHTML = b1 + c2 + d3; 
    
    document.getElementById("egi1").innerHTML = c1 + c2 + c3; 
    document.getElementById("egi2").innerHTML = d1 + a2 + b3; 

    document.getElementById("saudi1").innerHTML = b1 + b2 + b3; 
    document.getElementById("saudi2").innerHTML = a1 + d2 + c3;      

    document.getElementById("uru1").innerHTML = d1 + d2 + d3;
    document.getElementById("uru2").innerHTML = c1 + b2 + a3;       

}        

let Country = function(name, points, givGoals, recGoals) {
    this.name = name;
    this.points = points;
    this.givGoals = givGoals;
    this.recGoals = recGoals;
};

let russia = new Country("Russia", 6, 8, 4);
let saudi = new Country("Saudijska Arabija", 3, 2, 7);
let egipat = new Country("Egipat", 0, 2, 6);
let urugvaj = new Country("Urugvaj", 9, 5, 0);


if (russia.points > saudi.points && russia.points > egipat.points && russia.points > urugvaj.points) {
    document.getElementById("winnerA").innerHTML = russia.name;

    if (saudi.points > egipat.points && saudi.points > urugvaj.points) {
        document.getElementById("secondA").innerHTML = saudi.name;
    } else if (egipat.points > saudi.points && egipat.points > urugvaj.points) {
        document.getElementById("secondA").innerHTML = egipat.name;        
    } else {
        document.getElementById("secondA").innerHTML = urugvaj.name;         
    }

} else if (urugvaj.points > russia.points && urugvaj.points > egipat.points && urugvaj.points > saudi.points) {
    document.getElementById("winnerA").innerHTML = urugvaj.name;
   
    if (saudi.points > egipat.points && saudi.points > russia.points) {
        document.getElementById("secondA").innerHTML = saudi.name;
    } else if (egipat.points > saudi.points && egipat.points > russia.points) {
        document.getElementById("secondA").innerHTML = egipat.name;        
    } else {
        document.getElementById("secondA").innerHTML = russia.name;         
    }

} else if (saudi.points > egipat.points && saudi.points > russia.points && saudi.points > urugvaj.points) {
    document.getElementById("winnerA").innerHTML = saudi.name;

    if (urugvaj.points > egipat.points && urugvaj.points > russia.points) {
        document.getElementById("secondA").innerHTML = urugvaj.name;
    } else if (egipat.points > urugvaj.points && egipat.points > russia.points) {
        document.getElementById("secondA").innerHTML = egipat.name;        
    } else {
        document.getElementById("secondA").innerHTML = russia.name;         
    }

} else {
    document.getElementById("winnerA").innerHTML = egipat.name;

    if (urugvaj.points > saudi.points && urugvaj.points > russia.points) {
        document.getElementById("secondA").innerHTML = urugvaj.name;
    } else if (saudi.points > urugvaj.points && saudi.points > russia.points) {
        document.getElementById("secondA").innerHTML = egipat.name;        
    } else {
        document.getElementById("secondA").innerHTML = russia.name;         
    }    
}

