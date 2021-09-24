//Style file
import "./style.scss";
//Data JSON
import dogData from "./dogData.js";
import duckData from "./duckData.js";
//DerivedClass
import Duck from "./Duck";
import Dog from "./Dog";
//Dom Object
const gridCards = document.querySelector(".cards");

//Duck Object Instance
const myDuck = duckData.map((duck) => {
  return new Duck(duck.name, duck.img, duck.legs, duck.age);
});

//Dog Object Instance
const myDog = dogData.map((dog) => {
  return new Dog(dog.name, dog.img, dog.legs, dog.age);
});

//Destructing
let allAnimals = [...myDuck, ...myDog];

const generateDetailCard = (animal) => {
  return `<div class="card">
    <img src="${animal.image}" class="card__image">
    <div class="card__content">
    <p>Name: ${animal.name}</p>
    <p>Age: ${animal.age}</p>
    <p>Legs: ${animal.numberOfLegs}</p>
    </div>
    </div>`;
};

const createCardElements = (data) => {
  const resultHTML = data.reduce((acc, animal) => {
    return acc + generateDetailCard(animal);
  }, "");
  gridCards.innerHTML = resultHTML;
};

createCardElements(allAnimals);
