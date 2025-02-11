// Lets learn the event handling.

// We can add event to any element using addEventHandler(event , callbackfun())

const list = document.querySelector(".list");
list.addEventListener("click", (e) => {
  // e is the event object which contains info about event.
  e.preventDefault();
  console.log("Link deactivated");
});

// Lets explore e
// e.target => This gives the element which triggered event.
// e.preventDefault() => This prevent the default behaviour of element.
// e.stopPrapogation() => This stops the prapogation of event in case of nested element.
// e.clientX & e.clientY => This gives the position where event is occured.
// e.type => This gives the type of event. e.g 'click'
