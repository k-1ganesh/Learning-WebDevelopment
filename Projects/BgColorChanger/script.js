// Javascript to change the color on click.

let squares = document.querySelector('.inner').children
console.log(squares);
squares = Array.from(squares)

squares.forEach(square => {
   square.addEventListener('click' , (e) => {
      if (e.target.className === 'square1') {
          document.body.style.backgroundColor = 'grey'
      } else if (e.target.className === 'square2') {
          document.body.style.backgroundColor = 'pink'
      } else if (e.target.className === 'square3') {
          document.body.style.backgroundColor = 'yellow'
      } else{
          document.body.style.backgroundColor = 'red'
      } 
   })
   
});


