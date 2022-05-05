window.addEventListener('scroll', onScroll)

function onScroll () {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  var element = document.querySelector("nav")
  if (scrollY != 0) {
    element.classList.add("scroll")
  } else {
    element.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  var element = document.querySelector("#backToTopButton")
  if (scrollY > 400) {
    element.classList.add("show")
  } else {
    element.classList.remove("show")
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

