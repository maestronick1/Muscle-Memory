// var string ("nick");
// console.log(string);


// let number = (12);
// console.log=(number);

// var cars = ["Saab", "Volvo", "BMW", "Toyota"];
// console.log(cars);

// let todayIsSat = false;
// console.log(todayIsSat);


// let user = {
//     name: "Nick",
//     town: "Hughson",
//     food: "pizza",
//     age: "36",
//     isYoung: false
//   };


//   //functions

//   function printName (){   
//       let name= "Nick";
//       console.log(printName)

//   }
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   var x = fruits.pop(); 

//   function greeting() {
//     console.log("Hello, World!");

//    //pass in array
//     function displayCoolCar(array)
//     let result=[];
//     for let i= 0; i , array.length; i ++0 {
//         if (nbike.length > 7) {
//             result.push(cars);
//         }
//     }
//     return result
// }
// console.log*(displaCoolCar(cars));

// function removeFromArray(callback, array) {
//     let result = callback(array) [0];
//     console.log(result);
// }

// removeFromArray(displayCoolCar, cars);

// function printSentence(string) {
//     console.log(string);

// }

// function printPlayers(object){
//     console.log(object.players);
//     printPlayers(lakers);

// function printEachPlayer(object) {
//     object.player.forEach(eachplayer=> {
//         console.log(eachplayer);

//     });
// }    
// }
const sectionOne = document.getElementById('section-one');
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);

const sectionThree = document.querySelector('#section-three');

const sectionFour = document.querySelector('#section-four');

const sectionFive = document.querySelector('#section-five');
console.log(sectionFour);
console.log(sectionFive);
console.log(sectionThree);
const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);

// paraOne.textContent = 'Labron james';
// console.log(paraOne);
// paraTwo.textContent = 'Steph Curry';
// console.log(paraTwo);

const paraThree = document.querySelector('.paragraph-Three');
console.log(paraThree);
paraThree.textContent = 'Kem Walker';

const paraFour = document.querySelector('.paragraph-Four');
console.log(paraFour);
paraFour.textContent = 'Kyrie Irving';

const paraFive = document.querySelector('.paragraph-Five');
console.log(paraFive);
paraFive.textContent = 'Kyrie Irving';


const containerSix = document.createElement("div");
containerSix.classList.add("container-six");
console.log(containerSix);
const sectionSix = document.createElement("h2");
sectionSix.setAttribute("id", "section-six");
sectionSix.textContent = "Weezy";
console.log(sectionSix);
const paraSix = document.createElement("p");
paraSix.classList.add("paragraph-six");
paraSix.textContent = "Turn your fruits in to Vegtables";
console.log(paraSix);
const body = document.querySelector("body");
console.log(body);


body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);




//create another container

const containerSeven = document.createElement("div");
//add class
containerSeven.classList.add("container-seven");
console.log(containerSix);
//create a section
const sectionSeven = document.createElement("h2");
// add an id
sectionSeven.setAttribute("id", "section-seven");
// add text content
sectionSeven.textContent = "Beethoven";
console.log(sectionSeven);
//add another paragraph
const paraSeven = document.createElement("p");
//add a class
paraSeven.classList.add("paragraph-seven");
//add text content
paraSeven.textContent = "Symphony number Five";
console.log(paraSeven);

//append
body.appendChild(containerSeven);
container.appendChild(sectionSeven);
containerSeven.appendChild(paraSeven);