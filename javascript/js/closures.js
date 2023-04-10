// let name = "chirag";

//         const intro = (edu) => {
//             let age = 36
//             return function printdata () {
//                 console.log(name);
//                 console.log(age);
//                 console.log(edu);
//             }
//         }
// let ans =intro ("it");

// ans ();


let count = () => {
    let count =0;
    return function increasecount() {
        count = count + 1;
        return count ; 
    }
}
let r = count ();
r ();
r ();
console.log(r());

let r1 = count ();
r1 ();

console.log(r1());