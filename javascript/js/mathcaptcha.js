let n1 = parseInt(Math.floor(Math.random() * 10));
let n2 = parseInt(Math.floor(Math.random() * 10));

let rightans = n1+n2

document.getElementById("num1").innerHTML = n1;
document.getElementById("num2").innerHTML = n2;


function submit() {
  let ans =document.getElementById("Ans").Value

  if (rightans = ans) {
    alert ("your ans is correct")
  } else {
    alert ("your ans is correct" + "correct ans" rightans )
  }

   window.location.reload();
}