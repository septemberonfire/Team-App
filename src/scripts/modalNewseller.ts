import emailjs from '@emailjs/browser'

emailjs.init('ZZECrl1Cf1sVEu_XS')
// privateKey: import.meta.env.VITE_PRIVATE_KEY, // optional, highly recommended for security reasons

export default function showNewsellerWindow() {
  const modalWindowNewseller = document.getElementById('newseller-wrap') as HTMLElement
  const closeModalNewsellerBtn = document.getElementById('close-newseller-window') as HTMLElement
  let emailField = document.querySelector('.popup_email') as HTMLElement
  const footerSendBtn = document.getElementById('footer-send-btn') as HTMLElement
  const okBtn = document.getElementById('approve-btn') as HTMLElement
  const bannerSendBtn = document.getElementById('banner-send-btn') as HTMLElement
  const bannerSendArrowBtn = document.getElementById('banner-arrow-btn') as HTMLElement
  const newsellerWindowTitle = document.getElementById('title-newseller-window') as HTMLElement
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const serviceID = 'service_pdku25i'
  const templateID = 'template_p11ylel'

  async function SendEmailFooter() {
    let footerInput = document.querySelector('.footer_input') as HTMLInputElement
    let userEmail = footerInput.value
    if (footerInput.value.match(emailRegEx)) {
      const params = {
        to_email: userEmail,
      }
      newsellerWindowTitle.innerText = 'Done!'
      modalWindowNewseller.classList.add('open')
      emailField.innerText = `Letter about our newseller has been sent to ${footerInput.value}!`
      footerInput.value = ''
      emailjs.send(serviceID, templateID, params).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
        },
        function (err) {
          console.log('FAILED...', err)
        }
      )
    } else {
      newsellerWindowTitle.innerText = 'Error!'
      modalWindowNewseller.classList.add('open')
      emailField.innerText = `Email ${footerInput.value} is invalid. Try again`
    }
  }

  footerSendBtn.addEventListener('click', () => SendEmailFooter())

  okBtn.addEventListener('click', function () {
    modalWindowNewseller.classList.remove('open')
  })

  closeModalNewsellerBtn.addEventListener('click', function () {
    modalWindowNewseller.classList.remove('open')
  })

  async function SendEmailBanner() {
    let bannerInput = document.getElementById('banner-input') as HTMLInputElement
    let userEmail = bannerInput.value
    if (bannerInput.value.match(emailRegEx)) {
      const params = {
        to_email: userEmail,
      }
      newsellerWindowTitle.innerText = 'Done!'
      modalWindowNewseller.classList.add('open')
      emailField.innerText = `Letter about our newseller has been sent to ${bannerInput.value}!`
      bannerInput.value = ''
      emailjs.send(serviceID, templateID, params).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
        },
        function (err) {
          console.log('FAILED...', err)
        }
      )
    } else {
      newsellerWindowTitle.innerText = 'Error!'
      modalWindowNewseller.classList.add('open')
      emailField.innerText = `Email ${bannerInput.value} is invalid. Try again`
    }
  }

  if (bannerSendBtn) {
    bannerSendBtn.addEventListener('click', () => SendEmailBanner())
  }

  if (bannerSendArrowBtn) {
    bannerSendArrowBtn.addEventListener('click', () => SendEmailBanner())
  }
}
