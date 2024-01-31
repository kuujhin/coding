/*
alert("hi");

console.log(43434343);
console.log("lalalala");
console.log('lalal');

console.log(5+2);
console.log(5*2);
console.log(5/2);


const a = 5;
const b = 2;

console.log(a+b);
console.log(a*b);
console.log(a/b);

const myName = "jhin";
//python
// my_name = "jhin";

console.log("hello " + myName)
*/


/*
//2.3 const and let
let a = 5;
let b = 2;

console.log(a+b);
console.log(a*b);
console.log(a/b);

//const는 값 고정
//let 은 값 업데이트

let myName = "jhin";
console.log("hello " + myName)

myName = "kuujhin"; //myName이 const 인 경우 에러

console.log("hello " + myName)

//var은 위의 의미를 가지고 있지 않음 (let처럼 동작?) 더이상 사용하지 않음
*/


/*
//2.4 booleans
const amIFat = true;
console.log(amIFat);

//null은 값이 존재하지 않음

const amITall = null;
let something;
console.log(something, amITall);
// >undefined null 
*/


/*
//2.5 arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
console.log(daysOfWeek[3]);

//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
*/


/*
//2.6 objects
const playerName = "jhin";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//player1[0] == name, player1[1] == points
const player1 = ["jhin", 1212, false, "little bit"];

const player = {
    name: "jhin",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;//const는 수정할수 없다. player = false 시 에러
console.log(player);

player.lastName = "potato";
console.log(player);

player.points = player.points + 10;
console.log(player.points);
*/


/*
//2.7 functions
function sayHello1(){
    console.log("Hello!");
};
sayHello1();

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("jhin", 20);
sayHello("nico", 11);

function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}

plus(1,20);
divide(5,2);

const player = {
    name: "jhin",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("nico");  

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) { 
        console.log(a - b);
    },
    times: function (a, b) { 
        console.log(a * b);
    },
    divide: function (a, b) { 
        console.log(a / b);
    },
    power: function (a, b) { 
        console.log(a ** b);
    },

};

calculator.add(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);

console.log(calculator.add(2, 3));
*/
/*
//2.11 return
const age = 24;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) { 
        return a - b;
    },
    times: function (a, b) { 
        return a * b;
    },
    divide: function (a, b) { 
        return a / b;
    },
    power: function (a, b) { 
        return a ** b;
    },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
*/
/*
//2.13 conditional 1
const age1 = prompt("How old are you?");

console.log(age1);           //"15"
console.log(typeof age1);    //string
console.log(parseInt(age1)); //15

const age = parseInt(prompt("How old r u?"));
*/
/*
//2.14 conditional 2&3
const age = parseInt(prompt("How old r u?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50){
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("wow");
} else if (age > 80) {
    console.log("You can do whatever you want");
} 
*/