const body                = document.querySelector('body')
const hamburgerMenuButton = document.querySelector('.hamburgerMenuButton')
const hamburgerMenu       = document.querySelector('.hamburgerMenu')
const darkModeButton      = document.querySelector('.darkModeToggle')
const scrollToTopButton   = document.querySelector('.scrollToTop')

const toggleHamburgerMenu = () => {
  hamburgerMenu.classList.toggle('slideOut')
  hamburgerMenuButton.classList.toggle('menuOpen')
}

hamburgerMenuButton.addEventListener('click', toggleHamburgerMenu)

/////////////// DARK MODE TOGGLE ///////////////

const toggleDarkMode = () => {
  if (localStorage.darkMode === 'dark') {
    localStorage.darkMode = 'light'
    body.setAttribute('light-mode', 'light')
  } else {
    localStorage.darkMode = 'dark'
    body.setAttribute('light-mode', 'dark')
  }
}

darkModeButton.addEventListener('click', toggleDarkMode)

/////////////// SCROLL TO TOP BUTTON ///////////////

const handleScrollToTop = () => {
  window.scrollTo(0, 0)
}

scrollToTopButton.addEventListener('click', handleScrollToTop)
