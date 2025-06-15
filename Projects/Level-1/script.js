/*  What we will use. 
  - Smooth scrolling. 
    - create loco.css file and copy content of css file from locomotive js github. Link that file in html. 
    - add the cdn link of locomotive js in html as a script. 
    - copy the LocomotiveScroll function from locomotive github into script.js.
  - gsap 
  -scrollTrigger.
*/

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function trackMouse() {
    let mouse = document.querySelector('.crcle')
    let main = document.getElementById('main')

    main.addEventListener('mousemove' , function(e) {
        mouse.style.transform = `translate(${e.clientX}px , ${e.clientY}px)` 
        console.log(e)
    })
    main.addEventListener('mouseenter' , function(){
        mouse.style.display = 'block';
    })
    main.addEventListener("mouseleave" , function(){
        mouse.style.display = 'none';
    })
} 
trackMouse();