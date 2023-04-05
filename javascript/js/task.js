let box1 = parseInt (prompt("Enter your Gujarati mark"));
console.log(box1);
document.getElementById("gmark").innerHTML = box1;
let box2 = parseInt (prompt("Enter your Hindi mark"));
console.log(box2);
document.getElementById("gmark").innerHTML = box2;
let box3 = parseInt (prompt("Enter your maths mark"));
console.log(box3);
document.getElementById("gmark").innerHTML = box3;

let greeting; 
  if (box1 < box2) {
    
  } else {
    greeting = "PASS";
  }
document.getElementById("pf").innerHTML = greeting;