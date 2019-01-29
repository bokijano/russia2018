function groupB() {
	document.getElementById("content").style.display = "none";
	$("#worldCupB").fadeIn(3000);

    document.getElementById("worldCupA").style.display = "none";
    document.getElementById("worldCupC").style.display = "none";
    document.getElementById("worldCupD").style.display = "none";
    document.getElementById("worldCupE").style.display = "none";
    document.getElementById("worldCupF").style.display = "none";
    document.getElementById("worldCupG").style.display = "none";
    document.getElementById("worldCupH").style.display = "none";

//Maroko(a) - Iran (b)
    let a1 = 0;
    let b1 = 1;

    document.getElementById("m1").innerHTML = a1;
    document.getElementById("ir1").innerHTML = b1;


    let maro = 0;
    let ira = 0;
    let port = 0;
    let spa = 0;
    if (a1 > b1) {
    	maro = maro + 3;
    	document.getElementById("mar").innerHTML = maro;
    	document.getElementById("iran").innerHTML = ira;    	
    } else if (a1 === b1) {
    	maro = maro + 1;
    	ira = ira + 1;
        document.getElementById("mar").innerHTML = maro;
        document.getElementById("iran").innerHTML = ira;         	
    } else {
    	ira = ira + 3;
        document.getElementById("mar").innerHTML = maro;
        document.getElementById("iran").innerHTML = ira;         	
    }

// Portugal (c) - Španija (d)
    let c1 = 3;
    let d1 = 3; 

    document.getElementById("p1").innerHTML = c1;
    document.getElementById("sp1").innerHTML = d1;

    if (c1 > d1) {
    	port = port + 3;
    	document.getElementById("por").innerHTML = port;
    	document.getElementById("spain").innerHTML = spa;    	
    } else if (c1 === d1) {
    	port = port + 1;
    	spa = spa + 1;
        document.getElementById("por").innerHTML = port;
        document.getElementById("spain").innerHTML = spa;      	
    } else {
    	spa = spa + 3;
        document.getElementById("por").innerHTML = port;
        document.getElementById("spain").innerHTML = spa;  
     	
    }

// Portugal (a) - Maroko (c)
    let a2 = 0;
    let c2 = 1;

    document.getElementById("m2").innerHTML = a2;
    document.getElementById("p2").innerHTML = c2;

    if (a2 > c2) {
    	maro = maro + 3;
    	document.getElementById("mar").innerHTML = maro;
    	document.getElementById("por").innerHTML = port;   	
    } else if (a2 === c2) {
    	maro = maro + 1;
    	port = port + 1;
        document.getElementById("mar").innerHTML = maro;
        document.getElementById("por").innerHTML = port;        	
    } else {
    	port = port + 3;
        document.getElementById("mar").innerHTML = maro;
        document.getElementById("por").innerHTML = port;         	
    }

// Španija (d) - Iran (b)
    let d2 = 1;
    let b2 = 0;

    document.getElementById("sp2").innerHTML = d2;
    document.getElementById("ir2").innerHTML = b2;

    if (d2 > b2) {
    	spa = spa + 3;
    	document.getElementById("spain").innerHTML = spa;
    	document.getElementById("iran").innerHTML = ira;    	
    } else if (d2 === b2) {
    	spa = spa + 1;
    	ira = ira + 1;
        document.getElementById("spain").innerHTML = spa;
        document.getElementById("iran").innerHTML = ira; 
    } else {
    	ira = ira + 3;
        document.getElementById("spain").innerHTML = spa;
        document.getElementById("iran").innerHTML = ira;     	
    }

// Španija (d) - Maroko (a)
    let d3 = 2;
    let a3 = 2; 

    document.getElementById("sp3").innerHTML = d3;
    document.getElementById("m3").innerHTML = a3;

    if (d3 > a3) {
    	spa = spa + 3;
    	document.getElementById("spain").innerHTML = spa;
    	document.getElementById("mar").innerHTML = maro;  	
    } else if (d3 === a3) {
    	spa = spa + 1;
    	maro = maro + 1;
        document.getElementById("spain").innerHTML = spa;
        document.getElementById("mar").innerHTML = maro;          	
    } else {
    	maro = maro + 3;
        document.getElementById("spain").innerHTML = spa;
        document.getElementById("mar").innerHTML = maro;    
    }
// Iran(b) - Portugal (c) 
    let b3 = 1;
    let c3 = 1;

    document.getElementById("ir3").innerHTML = c3;
    document.getElementById("p3").innerHTML = b3;

    if (b3 > c3) {
    	ira = ira + 3;
    	document.getElementById("iran").innerHTML = ira;  
    	document.getElementById("por").innerHTML = port;    	
    } else if (b3 === c3) {
    	ira = ira + 1;
    	port = port + 1;
        document.getElementById("iran").innerHTML = ira;  
        document.getElementById("por").innerHTML = port;        	
    } else {
    	port = port + 3;
        document.getElementById("iran").innerHTML = ira;  
        document.getElementById("por").innerHTML = port;       	
    }

    document.getElementById("mar1").innerHTML = a1 + a2 + a3;
    document.getElementById("mar2").innerHTML = b1 + c2 + d3; 
    
    document.getElementById("por1").innerHTML = c1 + c2 + c3; 
    document.getElementById("por2").innerHTML = d1 + a2 + b3; 

    document.getElementById("iran1").innerHTML = b1 + b2 + b3; 
    document.getElementById("iran2").innerHTML = a1 + d2 + c3;      

    document.getElementById("spain1").innerHTML = d1 + d2 + d3;
    document.getElementById("spain2").innerHTML = c1 + b2 + a3;       
}

let Country1 = function(name, points, givGoals, recGoals) {
    this.name = name;
    this.points = points;
    this.givGoals = givGoals;
    this.recGoals = recGoals;
};

let portugal = new Country1("Portugalija", 5, 5, 4);
let spa = new Country1("Španija", 5, 6, 5);
let marok = new Country1("Maroko",1, 2, 4);
let ir = new Country1("Iran", 4, 2, 2);

if ((portugal.givGoals - portugal.recGoals) > (spa.givGoals - spa.recGoals) || portugal.givGoals > spa.givGoals) {
    document.getElementById("winnerB").innerHTML = "Portugal";
    document.getElementById("secondB").innerHTML = "Španija";    
} else {
    document.getElementById("secondB").innerHTML = "Portugal";
    document.getElementById("winnerB").innerHTML = "Španija";    
}

