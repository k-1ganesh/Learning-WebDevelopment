let time = 60;
let score = 0; 

function getHit(){
    const hit = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent = hit;
}

function makeBubble() {
    let bubbles = ""
    for (let i = 1 ; i < 97 ; i++) {
        let number = Math.floor(Math.random()*10) 
        bubbles += `<div class="bubble">${number}</div>`
    }
    document.querySelector('.bottom').innerHTML = bubbles; 
}

function startTimer(){
    
    const timer = setInterval(()=>{
        if (time <= 0){
            clearInterval(timer);
            document.querySelector('.bottom').innerHTML = `<h1>Game Over</h1>`
        } else {
            time--;
            document.querySelector('#time').textContent = time;
        }
        
    } , 1000)

}

function startGame() {
    document.querySelector('.bottom').addEventListener('click' , (e)=>{
        const userSelected = Number(e.target.textContent)
        const hit = Number(document.querySelector('#hit').textContent) 
        if (userSelected === hit) {
            score+= 10;
            document.querySelector('#score').textContent = score;
        }
        if (time > 0) {
            makeBubble();
            getHit();
        }
        
    })
}

startGame()
makeBubble();
startTimer();
getHit();