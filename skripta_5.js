// IF naredba

let age = 18;
let text = "You can NOT drive!";

if (age >= 18){
    text = "You can drive!";
}

console.log(text);


//IF else naredba

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good eavning";
}

console.log(greeting);

//IF else if naredba
const time = new Date().getHours();
let greeting2;

if (hour < 10) {
    greeting = "Good morning";
} else if (time < 20){
    greeting2 = "Good day";
} else {
    greeting2 = "Good evening";
}

console.log(greeting2);