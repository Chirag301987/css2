let A = parseInt (prompt("Enter your Gujarati mark"));
document.getElementById("A").innerHTML = A;
let B = parseInt (prompt("Enter your Hindi mark"));
document.getElementById("B").innerHTML = B;
let C = parseInt (prompt("Enter your Maths mark"));
document.getElementById("C").innerHTML = C;
let a = "Gujarati"
let b = "Hindi"
let c = "Maths"

if (A > B) {
    if (A > C) {
        document.getElementById("max").innerHTML = A+a;
    } else {
        document.getElementById("max").innerHTML = C+c;
    }
} else {
    if (B > C) {
        document.getElementById("max").innerHTML =B+b;
    } else {
        document.getElementById("max").innerHTML = C+(c);
    }
}

