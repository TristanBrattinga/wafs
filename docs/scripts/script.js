const hamburgerMenuButton = document.querySelector('.hamburgerMenuButton')
const closeHamburgerMenuButton = document.querySelector('header aside p')
const hamburgerMenu = document.querySelector('.hamburgerMenu')

function fetchData() {
  fetch('./data.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error
        (`HTTP error! Status: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      const dataContainer = document.getElementById('container')

      dataContainer.innerHTML = JSON.stringify(data.name, null, 2)
    })
    .catch((e) => console.error('Unable to fetch data:', e))
}

fetchData()

const toggleHamburgerMenu = () => {
  hamburgerMenu.classList.toggle('slideOut')
}


hamburgerMenuButton.addEventListener('click', toggleHamburgerMenu)
closeHamburgerMenuButton.addEventListener('click', toggleHamburgerMenu)
