let fd = document.getElementById("fdata");
let exdata = document.getElementById("dataex");

// let budgett = 0;
// let expenses = 0;
// let balance = budgett - expenses

const handalsubmit = () => {

    let budgett = document.getElementById("bdata").value
    let aElem = document.createElement("p");
    let texElem = document.createTextNode(budgett);
    aElem.appendChild(texElem);
    let divRef = document.getElementById("amount")
    divRef.appendChild(aElem);

    event.preventDefault();
}



const handalsub = () => {
    let budgett = document.getElementById("bdata").value
    let expenses = document.getElementById("exda").value

    let exElem = document.createElement("p");
    let extexElem = document.createTextNode(expenses);
    exElem.appendChild(extexElem);
    let exdivRef = document.getElementById("expenditure-value")
    exdivRef.appendChild(exElem);

    balance = budgett - expenses

    let baElem = document.createElement("p");
    let batexElem = document.createTextNode(balance);
    baElem.appendChild(batexElem);
    let badivRef = document.getElementById("balance-amount")
    badivRef.appendChild(baElem);

    let data = document.getElementById("exname").value;
    arr.push(data);
    document.getElementById('exname').value = "";

    let data1 = document.getElementById("exda").value;
    arr.push(data1);




    event.preventDefault()
}


fd.addEventListener("submit", handalsubmit);
exdata.addEventListener("submit", handalsub);








