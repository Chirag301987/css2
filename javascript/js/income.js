let form = document.getElementById ("caltaxform");
let i = document.getElementById("income")

const handelsubmit = () => {
    let i = document.getElementById("income")
    let A=0 ,B=0,C=0, D=0, E=0,F=0,G=0
    if (i.value > 300000 && i.value <= 500000) {
        B = (i.value - 300000) * .05
    } else if (i.value > 500000 && i.value <= 750000) {
        B = 200000 * .05
        C = (i.value - 500000) * .10
    } else if (i.value > 750000 && i.value <= 1000000) {
        B = 200000 * .05
        C = 250000 * .10
        D = (i.value - 750000) * .15
    } else if (i.value > 1000000 && i.value <= 1250000) {
        B = 200000 * .05
        C = 250000 * .10
        D = 250000 * .15
        E = (i.value - 1000000) * .20
    } else if (i.value > 1250000 && i.value <= 1500000) {
        B = 200000 * .05
        C = 250000 * .10
        D = 250000 * .15
        E = 250000 * .20
        F = (i.value - 1250000) * .25
    } else {
        B = 200000 * .05
        C = 250000 * .10
        D = 250000 * .15
        E = 250000 * .20
        F = 250000 * .25
         G = (i.value - 1500000) * .30
    }

    let T = A + B + C + D + E + F + G
    document.getElementById("a").innerHTML = A;
    document.getElementById("b").innerHTML = B;
    document.getElementById("c").innerHTML = C;
    document.getElementById("d").innerHTML = D;
    document.getElementById("e").innerHTML = E;
    document.getElementById("f").innerHTML = F;
    document.getElementById("g").innerHTML = G;
    document.getElementById("t").innerHTML = T;
    event.preventDefault()
}
form.addEventListener("submit",handelsubmit)
