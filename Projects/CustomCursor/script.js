const main = document.querySelector('.main')
const cursor = document.getElementById('cursor') 
console.log(main)
main.addEventListener('mousemove' , function(e) {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
    cursor.style.display = "block"
})
main.addEventListener('mouseout' , function(){
    cursor.style.display = "none"
})