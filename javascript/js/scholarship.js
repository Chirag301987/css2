let n = document.getElementById("name")
let c = document.getElementById("cast")
let g = document.getElementById("grade")
let f = document.getElementById("fees")

const handelchenge  = () => {
    let ndata = n.value;
    let cdata = c.value;
    let gdata = g.value;
    let fdata = f.value;     
}

n.addEventListener("change",handelchenge );
c.addEventListener("change",handelchenge );
g.addEventListener("change",handelchenge );
f.addEventListener("change",handelchenge );


const formsubmit = () => {
    if (g >= 9) {
        console.log('Your Grade is A ');
    } else if (g <9 && g <= 8.5) {
        console.log('Your Grade is B');
    } else if (g<8.5 && g<=8) {
        console.log('Your Grade is C');
    } else {
        console.log('Your Grade is D');
    }
}

const submit = () => {
    if () {
        
    }
    if (c === 'obc' ) {
        if (g >= 8.5 ) {
            document.getElementById("re").innerHTML = "Your Scholarship is 25%";
        } else { 
            document.getElementById("re").innerHTML = "You are not Eligible for Scholarship";
        }
        
    } else if (c === 'sc') {
        console.log("Your Scholarship is 50% ");
    } else if (c === 'st') {
        console.log("Your Scholarship is 100%");
    }else  {
        console.log("No Scholarship");
    }
    
}




