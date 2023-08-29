export default function showBurgerMenu() {
  const burgerIcon = document.querySelector('#burgerBtn') as HTMLElement
  const header = document.querySelector('.header') as HTMLElement

  burgerIcon.addEventListener('click', function (e) {
    e.stopPropagation()
    header.classList.toggle('open')
  })

  document.addEventListener('click', function (e) {
    const target = e.target as HTMLElement
    const its_menu = target.classList.contains('header_menu')
    const its_burger = target.closest('.header_burgerMenu')
    const menu_is_active = header.classList.contains('open')
    if (!its_menu && !its_burger && menu_is_active) {
      header.classList.remove('open')
    }
  })
}
