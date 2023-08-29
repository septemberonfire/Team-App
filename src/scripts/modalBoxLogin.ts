export default function showPopup() {

const login = document.querySelector(".login") as HTMLElement
// const logout = document.querySelector(".logout") as HTMLElement
const modalWindowLogin = document.getElementById("login-window") as HTMLElement
const modalWindowSignup = document.getElementById("signup-window") as HTMLElement
const modalWindowLogout = document.getElementById('logout-window') as HTMLElement
const closeBtn = document.querySelector(".popup_closeBtn") as HTMLElement
const toggleToSignup = document.querySelector(".popup_linkToggleToSignup") as HTMLElement
const toggleToLogin = document.querySelector(".popup_linkToggleToLogin") as HTMLElement 


modalWindowSignup.style.display = 'none'
modalWindowLogout.style.display = 'none'

if (login.classList.contains("login")) {
login.addEventListener("click", function() {
  modalWindowLogin.classList.add("open")
})
}

closeBtn.addEventListener("click", function() {
  modalWindowLogin.classList.remove("open")
})

toggleToSignup.addEventListener("click", function() {
  modalWindowLogin.classList.remove("open")
  modalWindowLogin.style.display = 'none'
  modalWindowSignup.style.display = 'grid'
  modalWindowSignup.classList.add("open")
})

toggleToLogin.addEventListener("click", function() {
  modalWindowSignup.classList.remove("open")
  modalWindowLogin.style.display = 'grid'
  modalWindowSignup.style.display = 'none'
  modalWindowLogin.classList.add("open")
})

if (login.classList.contains("logout")) {
login.addEventListener("click", function() {
  // modalWindowLogin.classList.remove("open")
  // modalWindowSignup.classList.remove("open")
  modalWindowLogout.style.display = 'grid'
  modalWindowLogout.classList.add('open')
})
}

}