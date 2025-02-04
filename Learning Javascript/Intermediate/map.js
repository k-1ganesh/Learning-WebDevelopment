// Maps are used to store key value pairs.

// Map can have any type of key whereas object has only string or symbol

/* 
 Features : 1) Key can be of any type
            2) Preserve Insertion Order
            3) Suitable for addition and deletion and search
*/ 

// Creating a new Map
let myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'Ganesh');
myMap.set(42, 'The Answer');
myMap.set(true, 'Boolean Key');
console.log(myMap);

// set(key, value) – Add Elements 
myMap.set('language', 'JavaScript');
myMap.set('framework', 'React');
console.log(myMap);

// get(key) – Retrieve Value
console.log(myMap.get('language')); // JavaScript

// has(key) – Check if Key Exists 
console.log(myMap.has('framework')); // true
console.log(myMap.has('backend'));   // false

// delete(key) – Remove Element 
myMap.delete('framework');
console.log(myMap.has('framework')); // false

// size – Get the Number of Entries 
console.log(myMap.size);

// clear() – Remove All Entries 
myMap.clear();
console.log(myMap.size); // 0
