/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. 
//In comments, list at least three reasonable abstractions that you might use to build this program;
// for each abstraction, list out at least two properties and behaviors that it would make sense for 
//that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

//'bakedGood'
//Description: Our app keeps track of recipes
//Every 'bakedGood' has
// - a cook time
// - a cook temperature
// - list of ingredients
// Every 'bakedGood' can 
// - add ingredients
// - oven type
// - dietary restrictions

//'testHelper'
//Description: Our app helps keep track of test prep
// Every testHelper has
// - a starting score
// - current score
// Every testHelper can
// - administer practice test
// - show weak areas
// - show hints

//'planter'
//Description: Our app helps people with lots of plants keep track of watering
// Every planter has
// -species
// - amount of sunlight neeed
// - amount of water needed
// Every planter can 
// - be watered
// - be rotated



// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the 
//variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

let pet_owner;

// Answer Starts Here
peto_owner= {
  name: "Max Johnson",
  address: "141 Spruce st. New York NY 10021"
}
// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

let some_pet;

// Answer Starts Here
some_pet = {
  name : "Spud",
  species: "Dog",
  breed: "Black Lab",
  noise: "bark",
  makeNoise: function(species){
      if (species === 'Dog'){
        return this.noise
      }
  }
}
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
