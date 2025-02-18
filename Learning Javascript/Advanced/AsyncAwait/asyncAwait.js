// async is keyword which is used to add before function. 
// async makes function asynchronous. 
// async function always return the promise. 
// In traditional promise , we used to handle promise using .then() method. 
// async will be handled using await. 
// await can be used only inside the async function. 


const p = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Promise resolved.")  
    },1000)  
})

async function sayHello() {
    console.log("Hello everyone"); 
    const data = await p // await resolves the promise. Here javascript suspend the sayHello() fun untill the promise resolves.     
    console.log(data);
}

sayHello()
