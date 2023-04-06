function handelcal () {
let height = document.getElementById("height").value;

let h = height * 0.01

let weight = document.getElementById("weight").value;

let cal = weight/(h*h)
document.getElementById("calulate").innerHTML = cal;

if (cal<18.6 && cal>1 ) {
    document.getElementById("guide").innerHTML = "You Are Under Weight"
  
} else if (cal=>18.6 && cal<=24.9) {
    document.getElementById("guide").innerHTML = "You Are Normal Range"
    
}else {
    document.getElementById("guide").innerHTML = "You Are Overweight"
   
}

}