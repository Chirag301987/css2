let aElem = document.createElement("a");
aElem.setAttribute("href", "#");
aElem.setAttribute("id","link");
aElem.setAttribute("onclick", "handelclick()")


let texElem = document.createTextNode("HOME");
aElem.appendChild(texElem);
let divRef = document.getElementById("demo")
divRef.appendChild(aElem);
const handelclick =()=> {
    console.log("OK");
}