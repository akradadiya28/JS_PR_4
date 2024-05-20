// Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.


const areaOfCircle = (r) => {
    const pi = 3.14;
    area = pi * r * r;
    return (area);
}

let r, area;
r = 10;

area = areaOfCircle(r);

document.getElementById("radius").innerHTML = (`Radius is = ${r}`);
document.getElementById("area").innerHTML = (`Area of Circle is = ${area}`);
