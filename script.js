// FOREACH

// const friends = ["Melissa", "Marc", "Andrew", "Nick"];

// friends.forEach(function(friend) {
//     console.log(`I have a friend named ${friend}`);
// });

// MAP

// const nums = [1, 2, 3];
// const squared = nums.map((num) => num * num)

// console.log(squared)

// FILTER

// const nums = [100, 2, 5, 42, 99]
// const odds = nums.filter((num) => num % 2);

// console.log(odds)

// FIND

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make:'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
// ];

// const firstWhiteCar = cars.find((car) => car.color === 'white');

// console.log(firstWhiteCar)

// const missingCar = cars.find((car) => car.color === 'blue');

// console.log(missingCar)

//  FINDINDEX

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make:'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
// ];

// const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015);

// console.log(idxFisrtCarNewerThan2015)

// const missingCarIdx = cars.findIndex((car) => car.year > 2020);

// console.log(missingCarIdx)

// SOME

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make:'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
// ];

// const hasFord = cars.come((car) => car.make === 'Ford');

// console.log(hasFord)

//  EVERY

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make:'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
// ];

const everyCarIsNever2000 = cars.every((car) => car.year > 2000)

console.log(everyCarIsNever2000)
 
// REDUCE

const nums = [25, 6, 100, 3];

const sum = nums.reduce((acc, num) => acc + num, 0);


