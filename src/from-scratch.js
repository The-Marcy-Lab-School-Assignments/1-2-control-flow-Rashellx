//Question 1

const measureRain = (inches) => {
  if (inches === 0) {
    console.log("drought")
  } else if (inches < 2 && inches > 0) {
    console.log("dry")
  } else if (inches < 4 && inches >= 2) {
    console.log("average")
  } else if (inches < 6 && inches >= 4) {
    console.log("rainy")
  } else console.log("flood")
}
//console.log(measureRain(2))

//Question 2
const happyBirthdayPet = (breed, age) => {
  const snake = 'snake'
  const cat = 'cat'
  const dog = 'dog'
  if (breed === snake && age >= 0) {
    console.log('Hiss hiss!')
  } else if (breed === cat && age < 5) {
    console.log("Mew mew!")
  } else if (breed === cat && age >= 5) {
    console.log("Meow meow!")
  } else if (breed === dog && age < 5) {
    console.log("Arf arf!")
  } else if (breed === dog && age >= 5 && age < 10) {
    console.log("Woof woof!")
  } else if (breed === dog && age >= 10) {
    console.log("Boof!")
  } else console.log("Happy birthday!")
};
//console.log(happyBirthdayPet('cat', 5))

//Question 3
const funTypes = (jsType) => {
  //console.log(typeof jsType)
  if (typeof jsType === 'string') {
    console.log("That's just some text.")
  } else if (Number.isNaN(jsType)) {
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === 'number') {
    console.log("That's a good number.")
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?")
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.")
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.")
  } else if (Array.isArray(jsType) === true) {
    console.log("I order you to be indexed.")
  } else if (typeof jsType === 'object') {
    console.log("Anybody got the key?")
  }
}

//console.log(funTypes([]))

//Question 4
//input: Number (float), String
//Output: Number(int)
const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float)
    //Math.ciel used to round up)
  } else if (roundingSetting === 'down') {
    return Math.floor(float)
    // Math.floor is used to round down
  } else if (roundingSetting === 'honest') {
    return Math.round(float)
    //Math.rounds follows math  
  } else {
    return 'pick a valid rounding number'
  }
};
console.log(rounder(3.5, 'up'))

//Question 5
const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzBuzz!')
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
};
//console.log(fizzBuzzish(30))

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
