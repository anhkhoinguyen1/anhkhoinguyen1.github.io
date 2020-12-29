// calculate circumference

function calCir(radius = 5) {
    r = radius;
    let cir = Math.round((radius * 2 * Math.PI) * 100) / 100;
    return cir;
}

let calcCir = calCir(Math.round( (Math.random() * (15-1)) + 1));
console.log(`A circle with radius ${r}cm has a circumference of ${calcCir}cm`);


// calculate area of circle

function calArea(radius = 5) {
    let circleArea = Math.round((Math.pow(radius,2) * Math.PI) * 100) / 100;
    return circleArea;
}

let calcArea = calArea(r);
console.log(`A circle with radius ${r}cm has a area is ${calcArea}cm^2`);


// convert cm to m

function convMatrix(length = 10) {
    start = length;
    let convLength = length / 100;
    return convLength;
}

let calcLength = convMatrix(Math.round((Math.random() * (9999-1)) + 1));
console.log(`${start}cm == ${calcLength}m`);

// convert minutes to hours 

function convToHour(totalMin = 100) {
    start1 = totalMin;
    let convHour = Math.round(totalMin / 60 * 100) / 100;
    return convHour;
}

let calcHour = convToHour(Math.round((Math.random() * (9999-1)) + 1));
console.log(`${start1}min == ${calcHour}h`);

// solve equation of ax + b = c
// 5x + 4 = 3
function solveEqua(a,b,c) { 
    A = a;
    B = b;
    C = c;
    let solved = Math.round((c - b) / a * 100) / 100;
    return solved;
}

let solution = solveEqua(Math.round((Math.random() * (20-1)) + 1),Math.round((Math.random() * (20-1)) + 1),Math.round((Math.random() * (20-1)) + 1));
console.log(`For the equation ${A}x + (${B}) = ${C} ; x = ${solution}`);


// convert degree celsius to fahrenheit

function convCel(degreeC) { 
    start2 = degreeC;
    let convFah = Math.round(((degreeC * 9/5) + 32) * 10) / 10;
    return convFah;
}

let calcFah = convCel(Math.round((Math.random() * (50-1)) + 1));
console.log(`${start2}*C == ${calcFah}*F`);


// calculate body mass index BMI of a person

function findBMI(mass = 69,height = 168) { 
    m = mass;
    h = height;
    let calcBMI = Math.round((mass / Math.pow(height/100,2)) * 10) / 10;
    return calcBMI;
}

let perBMI = findBMI(Math.round((Math.random() * (80-45)) + 45), Math.round((Math.random() * (185-150)) + 150));
console.log(`A person with a mass of ${m}kg and height of ${h}cm has BMI of ${perBMI}`);


// find a random number between to positive numbers

function findBetweenRange(min = 2, max = 8) { 
    minimum = min;
    maximum = max;
    let randNum = Math.round( (Math.random() * (max-min))  + min);
    return randNum;
}

let calcNum = findBetweenRange(Math.round((Math.random() * (30-20)) + 20),Math.round((Math.random() * (50-40)) + 40));
console.log(`A random number between ${minimum}-${maximum} is ${calcNum}`);







