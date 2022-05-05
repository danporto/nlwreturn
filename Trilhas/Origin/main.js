function onScroll () {
  var element = document.querySelector("nav")
  if (scrollY != 0) {
    element.classList.add("scroll")
  } else {
    element.classList.remove("scroll")
  }
}

function openMenu () {
  var element = document.querySelector("body")
  element.classList.add("menu-expanded")
}

function closeMenu () {
  var element = document.querySelector("body")
  element.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: 'top', // isto significa que ele vai se movimentar do topo para baixo
  distance: '30px',
  duration: 700, // tempo para mostrar a animação
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header, 
  #services .cards
  #about,
  #about header,
  #about .content`);