// Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.


let greeting = () => {
    let name = 'Arpit';
    document.getElementById("greet").innerHTML = (`Hello , ${name} Good Morning`);
}

greeting();