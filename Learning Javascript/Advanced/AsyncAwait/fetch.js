// fetch() is used to get the information from api. 
// fetch() returns the promise which can be handled using async-await or .then().catch() 

const URL = "https://api.github.com/users/k-1ganesh" 



/*  General flow of fetch() 

1. fetch() returns a promise which needs to be resolved.
2. after resolving consider I want data to be in json. Use data.json() 
3. .json() also returns the promise.
4. Resolve the promise returned by .json() to get the final jsonData.

*/ 


// Lets do this using async-await 

async function getDataUsingAsyncAwait() {
    try{
        const data = await fetch(URL) // fetch() returns the promise. await used to resolve the promise. 
        const jsonPromise = data.json() // This returns the promise of json convertion.
        
        const jsonData = await jsonPromise // await is used to again resolve the promise.
        console.log(jsonData)
    }
    catch(err) {
        console.log(err)
    }
    
}
getDataUsingAsyncAwait() 


// Lets do this using then() catch() 

function getDataUsingThenCatch() {
     const promise =  fetch(URL);
     promise
     .then((data) => {
         return data.json()
     })
     .then((JsonData) => {
        console.log(JsonData)
     })
     .catch((err) => {
        console.log(err)
     })
}

getDataUsingThenCatch()


