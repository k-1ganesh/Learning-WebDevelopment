function add(a , b) {
    return a + b
}

// add() This is function call 
// add This is function reference

// console.log(add(2,4))

function addsub(a , b) { // Function returning multiple values.
    return [a+b , a-b]
}
console.log(addsub(2,4))


function addGeneric(...numbers) { // Can accept any no. of parameter.
    let sum = 0
    for (let i = 0 ; i < numbers.length ; i++) {
        sum += numbers[i]
    }
    return sum
}

console.log(addGeneric(1,2,3))



// Function Expressions. 
// i.e Assigning function to variables.

const square = function(a) {
    return a ** 2
}
console.log(square(2))




// Function Hoisting.

//code runs without any error, despite the function gets called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope.
console.log(mult(2,54))
function mult(a , b) {
    return a * b
}

// Function hoisting only works with function declarations — not with function expressions. The following code will not work:

// console.log(ml(2,4)) // Here we will get error. 
// const ml = function(a , b) {
//     return a * b
// }


// Imediatly Invoked Functions. 

const value = (function(a , b){
   return a + b
})(2,4) 
console.log(value); // If we have 2 methods back to back end them with ;

(() => {
    console.log("Arrow function imediatly invoked.")
})()


// Arrow Function. 
// Syntax : (parameters) => {Function body}
const val = (a , b) => {
    return a + b
}
console.log(val(1,3))   

