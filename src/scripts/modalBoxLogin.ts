export default function showPopup() {

const login = document.querySelector(".login") as HTMLElement
const modalWindow = document.querySelector(".popup_authWrap") as HTMLElement
const closeBtn = document.querySelector(".popup_closeBtn") as HTMLElement

login.addEventListener("click", function() {
  modalWindow.classList.add("open")
})

closeBtn.addEventListener("click", function() {
  modalWindow.classList.remove("open")
})
}