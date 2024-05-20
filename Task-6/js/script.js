// Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function.

const mathFormula = (a, b) => {

    return (ans = ((a * a) + (2 * a * b) + (b * b)));
}

let ans, a = 10, b = 20;

ans = mathFormula(a, b);

document.getElementById("x").innerHTML = (`A is = ${a}`);
document.getElementById("y").innerHTML = (`B is = ${b}`);
document.getElementById("answer").innerHTML = (`Answer is = ${ans}`);