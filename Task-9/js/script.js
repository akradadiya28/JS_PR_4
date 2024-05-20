// Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.

const oddOrEven = (num) => {

    if (num % 2 == 1) {
        document.getElementById("odd").innerHTML = (`Your Number ${num} is Odd...`);
    } else if (num % 2 == 0) {
        document.getElementById("even").innerHTML = (`Your Number ${num} is Even...`);
    }
}

let num = 12;

oddOrEven(num);