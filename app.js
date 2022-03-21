// navbar

const openMenuBtn = document.querySelector('.menu-icon')
const closeMenuBtn = document.querySelector('.close-btn')
const navbar = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link')

const showNavbar = function () {
  navbar.classList.add('show-nav')
  openMenuBtn.classList.add('hidden')
}

const removeNavbar = function () {
  navbar.classList.remove('show-nav')
  openMenuBtn.classList.remove('hidden')
}

openMenuBtn.addEventListener('click', showNavbar)
closeMenuBtn.addEventListener('click', removeNavbar)

navLinks.forEach(navLink => navLink.addEventListener('click', removeNavbar))

// sticky nav using intersection observer API

const nav = document.querySelector('nav')

const sectionOne = document.querySelector('header')

const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (enteries) {
  const [entry] = enteries
  if (!entry.isIntersecting) nav.classList.add('nav-sticky')
  else nav.classList.remove('nav-sticky')
}

const stickyNavOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
}

const observer = new IntersectionObserver(stickyNav, stickyNavOptions)

observer.observe(sectionOne)
