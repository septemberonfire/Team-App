import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  setPersistence,
  AuthErrorCodes,
} from 'firebase/auth'
import { app } from './getFirebaseDB'

export default function auth() {
  const auth = getAuth(app)

  const inputEmailLogin = document.querySelector('.popup_login') as HTMLInputElement
  const inputPassLogin = document.querySelector('.popup_password') as HTMLInputElement
  const inputEmailSignUp = document.getElementById('inputEmailSignup') as HTMLInputElement
  const inputPassSignUp = document.getElementById('inputPassSignup') as HTMLInputElement
  const loginBtn = document.getElementById('logInBtn') as HTMLElement
  const signUpBtn = document.getElementById('signUpBtn') as HTMLElement
  const listItemLogin = document.querySelector('.login') as HTMLElement
  const listItemLogout = document.querySelector('.logout') as HTMLElement
  const noticeText = document.getElementById('notice_text') as HTMLElement
  const notice = document.getElementById('notice') as HTMLElement
  const closeNoticeBtn = document.querySelector('.close-notice') as HTMLElement
  const modalWindowLogin = document.getElementById('login-window') as HTMLElement
  const modalWindowSignup = document.getElementById('signup-window') as HTMLElement
  const logOutBtn = document.getElementById('approveLogoutBtn') as HTMLElement
  const modalWindowLogout = document.getElementById('logout-window') as HTMLElement
  const infoBlockLogin = document.getElementById('login-info') as HTMLElement
  const infoBlockSignUp = document.getElementById('signup-info') as HTMLElement

  const setPersLocal = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence)
    } catch (error) {
      console.error(error)
    }
  }

  setPersLocal()

  const createAccount = async () => {
    const emailTxt = inputEmailSignUp.value
    const passTxt = inputPassSignUp.value
    try {
      await createUserWithEmailAndPassword(auth, emailTxt, passTxt)
      listItemLogin.style.display = 'none'
      listItemLogout.style.display = 'flex'
      noticeText.innerText = 'You registered successfully!'
      notice.style.right = '0px'
      inputEmailSignUp.value = ''
      inputPassSignUp.value = ''
      modalWindowSignup.classList.remove('open')
      setTimeout(() => (notice.style.right = '-600px'), 3000)
      localStorage.setItem('user', emailTxt)
    } catch (error) {
      console.error(error)
      if (error.code === 'auth/email-already-in-use') {
        infoBlockSignUp.innerText = 'This email is already taken'
      }
      if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        infoBlockSignUp.innerText = 'Wrong email. Try again'
      }
    }
  }

  signUpBtn.addEventListener('click', createAccount)

  const signIn = async () => {
    const emailTxt = inputEmailLogin.value
    const passTxt = inputPassLogin.value
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailTxt, passTxt)
      listItemLogin.style.display = 'none'
      listItemLogout.style.display = 'flex'
      noticeText.textContent = `Welcome, ${emailTxt}!`
      notice.style.right = '0px'
      inputEmailLogin.value = ''
      inputPassLogin.value = ''
      modalWindowLogin.classList.remove('open')
      console.log(userCredential)
      setTimeout(() => (notice.style.right = '-600px'), 3000)
      localStorage.setItem('user', emailTxt)
    } catch (error) {
      console.error(error)
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        infoBlockLogin.innerText = 'Wrong password. Try again'
      } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        infoBlockLogin.innerText = 'Wrong email. Try again'
      } else if (error.code === 'auth/user-not-found') {
        infoBlockLogin.innerText = 'User not found'
      }
    }
  }

  loginBtn.addEventListener('click', signIn)

  const LogOut = async () => {
    try {
      await signOut(auth)
      modalWindowLogout.classList.remove('open')
      listItemLogin.style.display = 'flex'
      listItemLogout.style.display = 'none'
      noticeText.innerText = 'You successfully logged out'
      notice.style.right = '0px'
      setTimeout(() => (notice.style.right = '-600px'), 3000)
      localStorage.clear()
    } catch (error) {
      console.error(error)
    }
  }

  logOutBtn.addEventListener('click', LogOut)

  if (closeNoticeBtn) {
    closeNoticeBtn.addEventListener('click', () => {
      notice.style.right = '-600px'
    })
  }
  if (localStorage.getItem('user') !== null) {
    listItemLogin.style.display = 'none'
    listItemLogout.style.display = 'flex'
  }
}
