let i = document.getElementById("income")
const hsubmit = () => {
    return false
}
const hform = () => {
    if (i.value < 300000) {
        let A = i.value * 0
        document.getElementById("a").innerHTML = A;
        document.getElementById("t").innerHTML = A;
    } else if (i.value > 300000 && i.value <= 500000) {
        let A = i.value * 0
        let B = (i.value - 300000) * .05
        let T = A + B
        document.getElementById("a").innerHTML = A;
        document.getElementById("b").innerHTML = B;
        document.getElementById("t").innerHTML = T;
    } else if (i.value > 500000 && i.value <= 750000) {
        let A = i.value * 0
        let B = 200000 * .05
        let C = (i.value - 500000) * .10
        let T = A + B
        document.getElementById("a").innerHTML = A;
        document.getElementById("b").innerHTML = B;
        document.getElementById("c").innerHTML = C;
        document.getElementById("t").innerHTML = T;
    } else if (i.value > 750000 && i.value <= 1000000) {
        let A = i.value * 0
        let B = 200000 * .05
        let C = 250000 * .10
        let D = (i.value - 750000) * .15
        let T = A + B + C + D
        document.getElementById("a").innerHTML = A;
        document.getElementById("b").innerHTML = B;
        document.getElementById("c").innerHTML = C;
        document.getElementById("d").innerHTML = D;
        document.getElementById("t").innerHTML = T;
    } else if (i.value > 1000000 && i.value <= 1250000) {
        let A = i.value * 0
        let B = 200000 * .05
        let C = 250000 * .10
        let D = 250000 * .15
        let E = (i.value - 1000000) * .20
        let T = A + B + C + D + E
        document.getElementById("a").innerHTML = A;
        document.getElementById("b").innerHTML = B;
        document.getElementById("c").innerHTML = C;
        document.getElementById("d").innerHTML = D;
        document.getElementById("e").innerHTML = E;
        document.getElementById("t").innerHTML = T;
    } else if (i.value > 1250000 && i.value <= 1500000) {
        let A = i.value * 0
        let B = 200000 * .05
        let C = 250000 * .10
        let D = 250000 * .15
        let E = 250000 * .20
        let F = (i.value - 1250000) * .25
        let T = A + B + C + D + E + F
        document.getElementById("a").innerHTML = A;
        document.getElementById("b").innerHTML = B;
        document.getElementById("c").innerHTML = C;
        document.getElementById("d").innerHTML = D;
        document.getElementById("e").innerHTML = E;
        document.getElementById("f").innerHTML = F;
        document.getElementById("t").innerHTML = T;
    } else {
        let A = i.value * 0
        let B = 200000 * .05
        let C = 250000 * .10
        let D = 250000 * .15
        let E = 250000 * .20
        let F = 250000 * .25
        let G = (i.value - 1500000) * .30
        let T = A + B + C + D + E + F + G
        document.getElementById("a").innerHTML = A;
        document.getElementById("b").innerHTML = B;
        document.getElementById("c").innerHTML = C;
        document.getElementById("d").innerHTML = D;
        document.getElementById("e").innerHTML = E;
        document.getElementById("f").innerHTML = F;
        document.getElementById("g").innerHTML = G;
        document.getElementById("t").innerHTML = T;
    }
}