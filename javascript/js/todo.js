let todof = document.getElementById("todo_form");
let arr = [];
let updat = false; uid = null;

const getdata = () => {
    const data = JSON.parse(localStorage.getItem("todo"));
    console.log(data);
    if (data != null) {
        arr = dada;
        disply();

    }
}

const hendalremot = (i) => {
    arr.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(arr));
    disply();
}

const updatremot = (i) => {

    document.getElementById('todo_data').value = arr[i];
    updat = true;
    uid = i;
    disply();

}

const disply = () => {
    let disp = '<ul>';
    arr.map((v, i) => {
        disp += '<li>' + v;
        disp += '<button onclick="hendalremot(' + i + ')">X</button>';
        disp += '<button onclick="updatremot(' + i + ')">ADD</button>';
        disp += '</li>';
    });
    disp += '</ul>';
    document.getElementById('todo').innerHTML = disp;
}

const handelsubmit = () => {
    let data = document.getElementById("todo_data").value;
    arr.push(data);
    document.getElementById('todo_data').value = "";
    disply();
    localStorage.setItem("todo", JSON.stringify(arr));
    event.preventDefault();
}

const handelupdat = () => {
    let data = document.getElementById("todo_data").value;
    arr[uid] = data;
    console.log(uid);
    document.getElementById('todo_data').value = "";
    disply();
    localStorage.setItem("todo", JSON.stringify(arr));
    updat = false; uid = null;
    event.preventDefault();
}


const handel = () => {
    if (updat) {
        handelupdat();
    } else {
        handelsubmit();
    }
}

todof.addEventListener("submit", handel);
window.onload = getdata();

