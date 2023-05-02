// const person = {
//     name : "chirag",
//     age : "35"
// }

// console.log(person.name, person.age);
// console.log(person['name'], person['age']);

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((p)=> console.log(p.name,p.age));


// const person1 = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ] 
// person1.map((p)=> {
//     console.log(p.name,p.age)
//     p.course.map((v)=>console.log(v))
// });

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for (let i in myObj) {
//     if (i === 'cars'){
//         for (let v in myObj[i])
//         console.log(myObj[i][v]);
//     }else {
//         console.log(myObj[i]);
//     }
// }

let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat : 10
        }
    }
}


for (let i in data) {
    // console.log(data[i]);
    if (i === 'personal_info') {
        for (let A in data[i]) {
            console.log(data[i][A]);          
        }
    }else if (i==='courses') {
        for (let B in data[i]) {
            console.log(data[i][B]);
        }
    }else {
        for (let C in data[i]) {
            // console.log(data[i][C].admission,data[i][C].vacant_seat);       
        }
    }
}