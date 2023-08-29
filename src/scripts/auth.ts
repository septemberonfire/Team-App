import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./getFirebaseDB"

export default function auth() {


const auth = getAuth(app);

const inputEmail = document.querySelector(".popup_login") as HTMLInputElement;
const inputPass = document.querySelector(".popup_password") as HTMLInputElement;
const loginBtn = document.getElementById("logInBtn") as HTMLElement;
const signUpBtn = document.getElementById("signUpBtn") as HTMLElement;
const listItemLogin = document.querySelector('.login') as HTMLElement;
const noticeText = document.getElementById("notice_text") as HTMLElement;
const notice = document.getElementById("notice") as HTMLElement;
const closeNoticeBtn = document.querySelector(".close-notice") as HTMLElement;
const modalWindowLogin = document.getElementById("login-window") as HTMLElement
const modalWindowSignup = document.getElementById("signup-window") as HTMLElement
const modalWindowLogout = document.getElementById('logout-window') as HTMLElement

const createAccount = async () => {
  const emailTxt = inputEmail.value;
  const passTxt = inputPass.value;
  console.log(emailTxt, passTxt)
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailTxt,
      passTxt
    );
    console.log(userCredential.user);
    noticeText.innerText = "You registered successfully!"
    notice.style.right = "0px"
    listItemLogin.classList.add('logout')
    listItemLogin.innerText = 'Log Out'
    inputEmail.value = ''
    inputPass.value = ''
    modalWindowSignup.classList.remove("open")
  } catch (error) {
    console.error(error);
  }
};

signUpBtn.addEventListener("click", createAccount);

const signIn = async () => {
  const emailTxt = inputEmail.value;
  const passTxt = inputPass.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailTxt,
      passTxt
    );
    console.log(userCredential);
    noticeText.innerText = `Welcome, ${emailTxt}!`
    notice.style.right = "0px"
    listItemLogin.classList.add('logout')
    listItemLogin.classList.remove("login")
    listItemLogin.innerText = 'Log Out'
    inputEmail.value = ''
    inputPass.value = ''
    modalWindowLogin.classList.remove("open")
    setTimeout(() => notice.style.right = "-600px", 3000)
  } catch (error) {
    console.error(error);
  }
};

loginBtn.addEventListener("click", signIn);

closeNoticeBtn.addEventListener("click", () => {
  notice.style.right = "-600px"
})


}