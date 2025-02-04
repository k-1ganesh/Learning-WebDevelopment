// In javascript every array is object by default.

let arr = []
console.log(arr)
console.log(typeof arr) // Datatype of array is object.
// when array is assigned to other array reference is passed not copy. 

// Lets learn the different methods in array. 

arr = [1,2,3,4,5,6,7,8]
console.log(arr.reverse()) 
console.log(arr.sort())
console.log(arr.join(' ')) // Joins the elements of array and create string.
console.log(arr.slice(0 , 3)) // Returns the slice of array arr(start , end) 
console.log(arr.splice(0,2)) // Used to delete the part of array. splice(start , total_to_delete) 

arr.push(100) // Used to append element in array (back)
console.log(arr)
arr.pop() // Used to remove element from array. (back)
console.log(arr)


arr.unshift(10) // Used to add element in front of array
console.log(arr) 
arr.shift() // used to remove element from the front of array.
console.log(arr)