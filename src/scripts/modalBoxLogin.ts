export default function showPopup() {
  const login = document.querySelector('.login') as HTMLElement
  const logout = document.querySelector('.logout') as HTMLElement
  const modalWindowLogin = document.getElementById('login-window') as HTMLElement
  const modalWindowSignup = document.getElementById('signup-window') as HTMLElement
  const modalWindowLogout = document.getElementById('logout-window') as HTMLElement
  const closeBtn = document.querySelector('.popup_closeBtn') as HTMLElement
  const closeSignUpBtn = document.querySelector('.closeSignUpBtn') as HTMLElement
  const closeLogOutBtn = document.querySelector('.closeLogOutBtn') as HTMLElement
  const rejectLogOutBtn = document.getElementById('rejectLogoutBtn') as HTMLElement
  const toggleToSignup = document.querySelector('.popup_linkToggleToSignup') as HTMLElement
  const toggleToLogin = document.querySelector('.popup_linkToggleToLogin') as HTMLElement

  if (login.classList.contains('login')) {
    login.addEventListener('click', function () {
      modalWindowLogin.classList.add('open')
    })
  }

  closeBtn.addEventListener('click', function () {
    modalWindowLogin.classList.remove('open')
  })

  closeSignUpBtn.addEventListener('click', function () {
    modalWindowSignup.classList.remove('open')
  })

  closeLogOutBtn.addEventListener('click', function () {
    modalWindowLogout.classList.remove('open')
  })

  if (rejectLogOutBtn) {
    rejectLogOutBtn.addEventListener('click', function () {
      modalWindowLogout.classList.remove('open')
    })
  }

  toggleToSignup.addEventListener('click', function () {
    modalWindowLogin.classList.remove('open')
    modalWindowSignup.classList.add('open')
  })

  toggleToLogin.addEventListener('click', function () {
    modalWindowSignup.classList.remove('open')
    modalWindowLogin.classList.add('open')
  })

  logout.addEventListener('click', function () {
    modalWindowLogout.classList.add('open')
  })
}
