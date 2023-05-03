let fd = document.getElementById("fdata");
let exdata = document.getElementById("dataex");
// let budgett = 0;
// let expenses = 0;
// let balance = budgett - expenses
let arr =[]
const handalsubmit = () => {

    let budgett = document.getElementById("bdata").value
    let aElem = document.createElement("p");
    let texElem = document.createTextNode(budgett);
    aElem.appendChild(texElem);
    let divRef = document.getElementById("bu")
    divRef.appendChild(aElem);

    event.preventDefault();
}



const handalsub = () => {
    let budgett = document.getElementById("bdata").value
    let expenses = document.getElementById("exda").value
    console.log("1111");
    let exElem = document.createElement("p");
    let extexElem = document.createTextNode(expenses);
    exElem.appendChild(extexElem);
    let exdivRef = document.getElementById("exp")
    exdivRef.appendChild(exElem);

    balance = budgett - expenses

    let baElem = document.createElement("p");
    let batexElem = document.createTextNode(balance);
    baElem.appendChild(batexElem);
    let badivRef = document.getElementById("bal")
    badivRef.appendChild(baElem);

    // let data = document.getElementById("exname").value;
    // arr.push(data);
    // document.getElementById('exname').value = "";
   
    let data1 = document.getElementById("exda").value;
    arr.push(data1);

    let toElem = document.createElement("p");
    let totexElem = document.createTextNode(data1);
    toElem.appendChild(totexElem);
    let todivRef = document.getElementById("doto1")
    todivRef.appendChild(toElem);
   

    event.preventDefault()
}


fd.addEventListener("submit", handalsubmit);
exdata.addEventListener("submit", handalsub);








