// Object is collection of key value pairs.


// Declaring objects.
let student = {} 
let obj2 = new Object() 

// Creating keys and assigning values.
student.name = "Ganesh"
student.email = "kaganesh12@gmail.com"
student.id = 1 

console.log(student)

// Combining 2 object to form 3rd object
let stud1 = {}
let stud2 = {}
stud1.name = "Ganesh"
stud2.Id = 1
// While combining the object if keys are same . Last update to that key will be considered.
console.log({...stud1 , ...stud2}) 

// Frezzing the object. 
let emp1 = {} 
emp1.name = "Sanju"
emp1.age = 22 
// Now suppose we don't want any update to happen in object 
Object.freeze(emp1) // Onces the object is freezed No update will happen in object.

// 2 Interesting Methods.
Object.keys(emp1) // This returns the array of keys.
Object.values(emp1) // This returns the array of values.


// Object Destructuring.
const vehical = {
    name : "Mercedes Benz",
    price: 10000000
}
// Now suppose we want to access price again and again and every time we need to write 
// vehical.price. We can avoid this and directly write price with object destructuring.

const {price} = vehical 

console.log(price) // price === vehical.price 

const veh = {
    brand : "Mercedes",
    price : 1000000 ,
    info : {
        seats : 4 ,
        wheels : 4
    }
}
const {info} = veh 
console.log(`Total seats in Mercedes are ${info.seats}`) // `` is string interpolation.
