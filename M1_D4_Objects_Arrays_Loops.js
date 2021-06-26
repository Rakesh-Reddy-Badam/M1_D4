/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

function ex1() {
  const myArray =[1,2,3,4,5]
  return myArray
}

/* EXERCISE 2
Create an object "myObject" containing exactly your "name", "surname", "email", "address" and "age".
*/

const myObject = {
  name:'Rakesh Reddy',
  surname:'Badam',
  email:'bittureddy126@gmail.com',
  address:'Apt 12 Rosedale, Dublin, Ireland',
  age:27,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license. Call it "hasDrivingLicense"
*/
myObject.hasDrivingLicense=true
/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete myObject.age
/* EXERCISE 5
Create another object called "anotherObject" with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const anotherObject = {}
Object.assign(anotherObject,myObject)
anotherObject.email='rakeshreeddy6084@hotmail.com'
console.log('The email address of both objects are different?',anotherObject.email!==myObject.email)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

const totalShoppingCart = 60

function ex6(grossTotal) {
  /* WRITE YOUR CODE HERE */
  if(totalShoppingCart>50){
    let grossTotal=totalShoppingCart
    return grossTotal
  }else{
    let grossTotal=totalShoppingCart+10
    return grossTotal
  }
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let discount=totalShoppingCart*0.2
function ex7(grossTotal){
  if(totalShoppingCart>50){
    let grossTotal=totalShoppingCart-discount
    return grossTotal
  }else{
    let grossTotal=(totalShoppingCart-discount)+10
    return grossTotal
  }
}

// expected 20% discount and free shipping if discounted price is higher than 50. Other wise, 20% discounted price and +10$ of shipping charged.

/* EXERCISE 8
Create an object representing a car with properties like "brand", "model", "licensePlate".
After you create the first car, clone it 5 times and change the "licensePlate" for each cloned car without affecting the original one.
*/

const car = {
  brand:'Audi',
  model:'A5',
  licensePlate:'12AB3450'
  }
//console.log(car)
const car2={}
Object.assign(car2,car)
car2.licensePlate='56TE8950'
//console.log(car2)
const car3={}
Object.assign(car3,car)
car3.licensePlate='48GH9800'
//console.log(car3)
const car4={}
Object.assign(car4,car)
car4.licensePlate='48GF7840'
//console.log(car4)
const car5={}
Object.assign(car5,car)
car5.licensePlate='78GY6768'
//console.log(car3)
const car6={}
Object.assign(car6,car)
car6.licensePlate='58GU7930'
//console.log(car6)


/* EXERCISE 9
Create a new array called "carsForRent" containing all the cars from the previous exercise.
*/

const carsForRent = [car,car2,car3,car4,car5,car6]
//console.log(carsForRent)

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
//to remove the first one
carsForRent.shift()
//carsForRent.splice(0,1)
carsForRent.pop()
//console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and brand properties.
*/
console.log(typeof car.brand)
console.log(typeof car.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

const carsForSale = [car3,car,car4]
const totalCars = {carsForRent:carsForRent.length,
  carsForSale:carsForSale.length}

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log(carsForSale[0])
console.log(carsForSale[1])
console.log(carsForSale[2])

module.exports = {
  ex1,
  myObject,
  anotherObject,
  ex6,
  ex7,
  carsForRent,
  carsForSale,
  totalCars
}