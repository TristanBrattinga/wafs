const body                     = document.querySelector('body')
const hamburgerMenuButton      = document.querySelector('.hamburgerMenuButton')
const hamburgerMenu            = document.querySelector('.hamburgerMenu')
const darkModeButton           = document.querySelector('.darkModeToggle')
const scrollToTopButton        = document.querySelector('.scrollToTop')

const fetchData = async () => {
  await fetch(``)
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

const fetchPublicApi = async () => {
  await fetch(`http://www.omdbapi.com/?apikey=12dd510b&t=phantom`)
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

fetchPublicApi()
fetchData()

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
  window.scrollTo(0,0)
}

scrollToTopButton.addEventListener('click', handleScrollToTop)