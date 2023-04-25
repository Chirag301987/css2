let todof = document.getElementById("todo_form")
let arr = []
let updat = false

const hendalremot = (i) => {
 console.log(i);
 arr.splice(i,1)
 disply();
} 

const updatremot = (i) => {
    console.log(i);
    document.getElementById('todo_data').value = arr[i]
    console.log(ans);
    disply();

}

const disply = () => {
let disp = '<ul>';
arr.map((v,i) => {
    disp += '<li>' + v ;
    disp += '<button onclick="hendalremot(' +i+ ')">X</button>'
    disp += '<button onclick="updatremot(' +i+ ')">ADD</button>'
    disp += '</li>'
});
disp += '</ul>'
document.getElementById('todo').innerHTML = disp;
}

const handelsubmit = () => {
    let data = document.getElementById("todo_data").value
    arr.push(data);
    disply();
    event.preventDefault()
}

const handelupdat = (a) => {
     console.log(a);
}


const handel = () => {
    if (updat) {
        handelupdat();
    }else {
        handelsubmit();
    }
}

todof.addEventListener("submit",handel)