let f = document.getElementById("fname")
let s = document.getElementById("sform")
let e = document.getElementById("email")
const handelsubmit = () => {
    console.log("form submitted");
    return false
}
const handelfocus =() => {
   
    f.style.borderColor = "green"
}
const handelblur = () => {
    let data = f.value
    if (data === '') {
        f.style.borderColor= 'red'
        
    } else if () {
        f.style.borderColor= 'blue'
    } else {

    }
    
}
const handelchenge = () => {
    let fvalue = f.value
    console.log(fvalue);
}


f.addEventListener("focus",handelfocus);
f.addEventListener("blur",handelblur);
f.addEventListener("change",handelchenge )