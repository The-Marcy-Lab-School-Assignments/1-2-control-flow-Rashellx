//Question 1

const measureRain = (inches) => {
  if (inches === 0) {
    return "drought"
  } else if (inches < 2 && inches > 0) {
    return "dry"
  } else if (inches < 4 && inches >= 2) {
    return "average"
  } else if (inches < 6 && inches >= 4) {
    return "rainy"
  } else return "flood"
}
//console.log(measureRain(2))

//Question 2
const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake' && age >= 0) {
    return 'Hiss hiss!'
  } else if (breed === 'cat' && age < 5) {
    return "Mew mew"
  } else if (breed === 'cat' && age >= 5) {
    return "Meow meow"
  } else if (breed === 'dog' && age < 5) {
    return "Arf arf"
  } else if (breed === 'dog' && age > 10 && age <= 5) {
    return "Woof woof"
  } else if (breed === 'dog' && age >= 10) {
    return "Boof!"
  } else return "Happy birthday!"
};
//console.log(happyBirthdayPet('cat', 5))

//Question 3
const funTypes = (jsType) => {
  console.log(typeof jsType)
  if (typeof jsTyoe === 'string') {
    return "That's just some text."
  } else if (jsType === NaN) {
    return "Well, now you're just showing off."
  } else if (typeof jsType === 'number') {
    return "That's a good number"
  } else if (typeof jsType === 'boolean') {
    return "To bool, or not to bool?"
  } else if (typeof jsType === 'undefined') {
    return "Nothing, but I didn't set that."
  } else if (jsType === null) {
    return "Nothing, and I did set that."
  } else if (Array.isArray(jsTrue) === true) {
    return "I order you to be indexed."
  } else if (typeof jsType === 'object') {
    return "Anybody got the key?"
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
    return 'FizzBuzz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
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
