const menuSection = document.querySelector('.menuSection')
const menuToggle = document.querySelector('.menuToggle')

const search = document.querySelector('.search')
const textInput = document.querySelector('#text')
const searchBtn = document.querySelector('button')
const logo = document.querySelector('.logo')


menuToggle.addEventListener('click', () => {
  menuSection.classList.toggle('on')
  const bothAreActive = menuSection.classList.contains('on') && search.classList.contains('on')
  
  if(bothAreActive) {
    document.querySelector('header').style.justifyContent = 'end'
  }
})

function reloadPage() {
  window.location.reload()
}

searchBtn.addEventListener('click', () => {
  if(textInput.value.length > 0) {
    reloadPage()
  }

  if(window.matchMedia("(max-width:768px)").matches) {
    search.classList.add('on')
    textInput.focus()
    logo.style.display = 'none'
  }
})

textInput.addEventListener('blur', () => {
  search.classList.remove('on')
  logo.style.display = 'initial'
})

