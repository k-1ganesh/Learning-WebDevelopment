let flag = 0;
const button = document.getElementById("button")
button.addEventListener('click' , function(){
    const status = document.getElementById('status')
    if (flag === 0) {
        status.textContent = "Friend";
        status.style.color = "green" 
        button.textContent = "Remove Friend"
        button.style.backgroundColor = "red"
        flag = 1;
    } else {
        status.textContent = "Stranger";
        status.style.color = "red"
        button.textContent = "Add Friend"
        button.style.backgroundColor = "cadetblue"
        flag = 0;
    }
    
})