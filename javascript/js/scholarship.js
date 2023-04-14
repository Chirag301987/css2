let n = document.getElementById("name")
let c = document.getElementById("cast")
let g = document.getElementById("grade")
let f = document.getElementById("fees")

const hsubmit = () => {
       return false
}
const hform = () => {
    fvalue = f.value
    if (g.value >= 9) {
        document.getElementById("gd").innerHTML = "A";
        if (c.value === "OPEN") {
            let payfees = fvalue
            document.getElementById("ss").innerHTML = "No Scholarship";
            document.getElementById("ff").innerHTML = payfees;
        } else if (c.value === "OBC") {
            let ss = fvalue*0.25;
            let payfees = fvalue-ss;
            document.getElementById("ss").innerHTML = "25 %"+"("+ ss+")";
            document.getElementById("ff").innerHTML = payfees;  
        } else if (c.value === "SC") {
            let ss = fvalue*0.50;
            let payfees = fvalue-ss;
            document.getElementById("ss").innerHTML = "50 %"+"("+ ss+")";
            document.getElementById("ff").innerHTML = payfees; 
        }else {
            let ss = fvalue*1;
            let payfees = fvalue-ss;
            document.getElementById("ss").innerHTML = "100 %"+"("+ ss+")";
            document.getElementById("ff").innerHTML = payfees; 
        }
    } else if (g <9 && g <= 8.5) {
        document.getElementById("gd").innerHTML = "B";
        if (c.value === "OPEN") {
            let payfees = fvalue
            document.getElementById("ss").innerHTML = "No Scholarship";
            document.getElementById("ff").innerHTML = payfees;
        } else if (c.value === "OBC") {
            let ss = fvalue*0.25;
            let payfees = fvalue-ss;
            document.getElementById("ss").innerHTML = "25 %"+"("+ ss+")";
            document.getElementById("ff").innerHTML = payfees;  
        } else if (c.value === "SC") {
            let ss = fvalue*0.50;
            let payfees = fvalue-ss;
            document.getElementById("ss").innerHTML = "50 %"+"("+ ss+")";
            document.getElementById("ff").innerHTML = payfees; 
        }else {
            let ss = fvalue*1;
            let payfees = fvalue-ss;
            document.getElementById("ss").innerHTML = "100 %"+"("+ ss+")";
            document.getElementById("ff").innerHTML = payfees; 
        }
        
    } else if (g<8.5 && g<=8) {
        let payfees = fvalue
        document.getElementById("gd").innerHTML = "C";
        document.getElementById("ss").innerHTML = "No Scholarship";
        document.getElementById("ff").innerHTML = payfees;
    } else {
        let payfees = fvalue
        document.getElementById("gd").innerHTML = "D";
        document.getElementById("ss").innerHTML = "No Scholarship";
        document.getElementById("ff").innerHTML = payfees;
    }
}






