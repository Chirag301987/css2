let fd = document.getElementById("fdata");
const handalsubmit = () => {
    let budget = document.getElementById("bdata").value
    console.log(budget);
    document.getElementById("bu").innerHTML= budget
    event.preventDefault()
} 
// bal = budget - expen 
fd.addEventListener("submit",handalsubmit);