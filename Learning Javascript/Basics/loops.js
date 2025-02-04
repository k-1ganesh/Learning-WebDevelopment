
let arr = [1,2,3,4,5,5,6,7,8]

// For loop
for (let i=0 ; i<arr.length;i++) {
       console.log(arr[i])
}

// For of loop 
for (const val of arr) { // Don't work in object. Can be stopped.
    console.log(val)
}

// For in loop 
for (const val in arr) { // This gives the keys of iterable object.
    console.log(val)
}

// For each loop 
arr.forEach((item) => { // Works only for array. Cannot be stopped.
    console.log(item)
})


let ar1 = [
    {name : 'sam'},{age : 12},{status : "happy"}
]

for (const item of ar1) {
    console.log(item)
}

ar1.forEach((item) => {
      console.log(item)
})

// filter -> Used to select elements which meets specific condition
let ages = [10 , 20 , 30 ,22 , 23, 45] ;
const filteredAges = ages.filter((age) => { // This returns the filtered array.
    return age > 25
}) 
console.log(filteredAges)

// Map -> Used to transform the elements of array 
let values = [1,2,3,4,5]
let updatedValues = values.map( (value) => {
    return value * 2
})
console.log(updatedValues)

// Reduce -> Used to reduce the array to a single value
let sample = [1,2,3,4,5]
// Lets find the sum of array

const totalSum = sample.reduce( (sum , num) => {
     return sum + num
},0)

console.log(totalSum)