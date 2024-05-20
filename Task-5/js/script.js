// Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

const formula = (a, b, c) => {

    return (ans = ((b * b) * (4 * a * c) / (2 * a)));
}

let a = 15, b = 20, c = 25, ans;

ans = formula(a, b, c);

document.getElementById("x").innerHTML = (`A is = ${a}`);
document.getElementById("y").innerHTML = (`B is = ${b}`);
document.getElementById("z").innerHTML = (`C is = ${c}`);
document.getElementById("answer").innerHTML = (`Answer is = ${ans}`);