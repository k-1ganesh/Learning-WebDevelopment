const userId = 1  // Constants can't be changed.
let Name = "Ganesh"
var surName = "Kachare" 
middleName = "Rajaram" // Variables can be declared without var and let as well. 

console.log(Name);
console.log(surName);
console.log(middleName); 

console.table([Name , surName , middleName]) // Used to output multiple values in the form of table.


// Var VS Let 

/* 
Scope of Var is global. Which might cause some problems.
So its advised to not to use var and instead use let. 
*/

/* 
Scope of let is block level. So it can be used consistently.
*/

console.log(id) // Here We tried to use variable before declaration. Var will not give error but let will give.  
var id = 10