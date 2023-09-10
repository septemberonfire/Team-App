export default function showNewsellerWindow() {
  const modalWindowNewseller = document.getElementById('newseller-wrap') as HTMLElement
  const closeModalNewsellerBtn = document.getElementById('close-newseller-window') as HTMLElement
  let emailField = document.querySelector('.popup_email') as HTMLElement
  const footerSendBtn = document.getElementById('footer-send-btn') as HTMLElement
  const okBtn = document.getElementById('approve-btn') as HTMLElement
  const bannerSendBtn = document.getElementById('banner-send-btn') as HTMLElement
  const bannerSendArrowBtn = document.getElementById('banner-arrow-btn') as HTMLElement

  footerSendBtn.addEventListener('click', function () {
    let footerInput = document.querySelector('.footer_input') as HTMLInputElement
    if (footerInput.value.length > 5) {
      modalWindowNewseller.classList.add('open')
      emailField.innerText = `Letter about our newseller has been sent to ${footerInput.value}!`
      footerInput.value = ''
    }
  })

  okBtn.addEventListener('click', function () {
    modalWindowNewseller.classList.remove('open')
  })

  closeModalNewsellerBtn.addEventListener('click', function () {
    modalWindowNewseller.classList.remove('open')
  })

  if (bannerSendBtn) {
    bannerSendBtn.addEventListener('click', function () {
      let bannerInput = document.getElementById('banner-input') as HTMLInputElement
      if (bannerInput.value.length > 5) {
        modalWindowNewseller.classList.add('open')
        emailField.innerText = `Letter about our newseller has been sent to ${bannerInput.value}!`
        bannerInput.value = ''
      }
    })
  }

  if (bannerSendArrowBtn) {
    bannerSendArrowBtn.addEventListener('click', function () {
      let bannerInput = document.getElementById('banner-input') as HTMLInputElement
      if (bannerInput.value.length > 5) {
        modalWindowNewseller.classList.add('open')
        emailField.innerText = `Letter about our newseller has been sent to ${bannerInput.value}!`
        bannerInput.value = ''
      }
    })
  }
}
