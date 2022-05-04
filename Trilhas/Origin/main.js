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