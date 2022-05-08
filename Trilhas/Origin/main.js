window.addEventListener('scroll', onScroll)

function onScroll () {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  // activateMenuAtCurrentSection(section);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 
  // Verficar se a seção passou da linha
  // Quais dados vou precisar? 
  //o topo da seção
  const sectionTop = section.offsetTop;
  //a altura da seção
  const sectionHeight = section.offsetHeight;  
  // o Topo da seção cheogu ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  // verifciar se a base está abaixo da linha alvo
  // quais dados vou precisar?  
  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight
  // o final da seção pasosu da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) //para colocar uma variável 
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  let element = document.querySelector("nav")
  if (scrollY > 0) {
    element.classList.add("scroll")
  } else {
    element.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  let element = document.querySelector("#backToTopButton")
  if (scrollY > 400) {
    element.classList.add("show")
  } else {
    element.classList.remove("show")
  }
}

function openMenu () {
  let element = document.querySelector("body")
  element.classList.add("menu-expanded")
}

function closeMenu () {
  let element = document.querySelector("body")
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




