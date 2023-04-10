let d = new Date();
let hour = d.getHours();
let h = hour*3600
let minutes = d.getMinutes();
let m = minutes*60
let seconds = d.getSeconds();
let s = seconds
let time = h+m+s;
console.log(time);

let t = hour+":"+minutes+":"+seconds
document.getElementById("demo").innerHTML = time;


// if (time<43199 && time>=21600) {
//     document.getElementById("hi").innerHTML = "Hello Good Morning"
// }else if (time=>43200 && time<=61199) {
//     document.getElementById("hi").innerHTML = "Hello Good Afternoon"
// }else if (time=>61200 && time<=72000) {
//     document.getElementById("hi").innerHTML = "Hello Good Afternoon"
// }else {
//     document.getElementById("hi").innerHTML = "Hello Good Night"
// }

