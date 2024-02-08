const body                     = document.querySelector('body')
const hamburgerMenuButton      = document.querySelector('.hamburgerMenuButton')
const closeHamburgerMenuButton = document.querySelector('header aside p')
const hamburgerMenu            = document.querySelector('.hamburgerMenu')
const darkModeButton           = document.querySelector('.darkModeToggle')
const scrollToTopButton        = document.querySelector('.scrollToTop')

function fetchData() {
  const movies = ['return of the jedi', 'phantom menace'];
  const movieTitles = movies.join(',');

  fetch(`http://www.omdbapi.com/?apikey=12dd510b&t=${encodeURIComponent(movieTitles)}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error
        (`HTTP error! Status: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((e) => console.error('Unable to fetch data:', e))
}

fetchData()

const toggleHamburgerMenu = () => {
  hamburgerMenu.classList.toggle('slideOut')
  hamburgerMenuButton.classList.toggle('menuOpen')
}

hamburgerMenuButton.addEventListener('click', toggleHamburgerMenu)
closeHamburgerMenuButton.addEventListener('click', toggleHamburgerMenu)

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
  window.scrollTo(0,0)
}

scrollToTopButton.addEventListener('click', handleScrollToTop)