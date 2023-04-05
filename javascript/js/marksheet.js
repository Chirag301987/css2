let fname = prompt ("Enter Your Name")
console.log(fname);
document.getElementById("fname").innerHTML = fname;
let rollnomber = prompt ("Enter Your Roll Nomber ")
console.log(rollnomber);
document.getElementById("rollnomber").innerHTML = rollnomber;

let gmark = parseInt (prompt("Enter your Gujarati mark"));
console.log(gmark);
document.getElementById("gmark").innerHTML = gmark;
let hmark = parseInt (prompt("Enter your Hindi mark"));
console.log(hmark);
document.getElementById("hmark").innerHTML = hmark;
let mmark = parseInt (prompt("Enter your Maths mark"));
console.log(mmark);
document.getElementById("mmark").innerHTML = mmark;
let smark = parseInt (prompt("Enter your Science mark"));
console.log(smark);
document.getElementById("smark").innerHTML = smark;
let tmark =gmark+hmark+mmark+smark
console.log(tmark);
document.getElementById("tmark").innerHTML = tmark;
let pmark = ((tmark*100)/400)
console.log(pmark);
document.getElementById("pmark").innerHTML = pmark;


let pfa = pmark
let greeting; 
  if (pfa < 35) {
    greeting = "FAIL";
  } else {
    greeting = "PASS";
  }
document.getElementById("pf").innerHTML = greeting;

