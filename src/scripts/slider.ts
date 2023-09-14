export default function () {
  const count = { value: 0 }
  addListenersForMovingFeedback({ isPrevArrow: true, count })
  addListenersForMovingFeedback({ isPrevArrow: false, count })
  dnd()
}
function dnd() {
  const cardWrap = document.querySelector('#cardsWrap') as HTMLElement
  let isPressed = false
  let transX = 0

  cardWrap.addEventListener("mouseup", () => {
    isPressed = false
    cardWrap.style.cursor = "grab";
  });

  cardWrap.addEventListener('mousedown', (e) => {
    cardWrap.style.cursor = 'grabbing'
    isPressed = true
    let movement = window.getComputedStyle(cardWrap).transform.split(',')
    transX = +movement.splice(-2, 1)
  })

  cardWrap.addEventListener('mouseenter', () => {
    cardWrap.style.cursor = 'grab'
  })

  cardWrap.addEventListener('mousemove', (e) => {
    if (!isPressed) return
    let x = e.offsetX
    e.preventDefault()
    cardWrap.style.transform = `translateX(${x - transX}px)`
    console.log({ offsetX: x, transX })
  })
}

function addListenersForMovingFeedback({
  isPrevArrow,
  count,
}: {
  isPrevArrow: boolean
  count: { value: number }
}) {
  const prevArrow = document.querySelector('#prev-arrow')
  const nextArrow = document.querySelector('#next-arrow')
  const cardWrap = document.querySelector('#cardsWrap') as HTMLElement
  const wrapperCardsWidth = cardWrap.offsetWidth
  const countElemenets = cardWrap.childElementCount
  const paddingRight = 40
  const gap = 16
  const cardWidth = (cardWrap.children[0] as HTMLElement).offsetWidth
  const maxWidth =
    cardWidth * countElemenets + gap * (countElemenets - 1) - wrapperCardsWidth + paddingRight
  const currentElem = isPrevArrow ? prevArrow : nextArrow

  function cardMover() {
    if (cardWrap) {
      if (count.value === 0 && isPrevArrow) {
        cardWrap.style.transform = `translateX(${count.value}px)`
        return
      }
      if (Math.abs(count.value) >= maxWidth && !isPrevArrow) {
        cardWrap.style.transform = `translateX(${count.value}px)`
        return
      }
      if (maxWidth - Math.abs(count.value) < cardWidth && !isPrevArrow) {
        const carouselRestToEnd = maxWidth - Math.abs(count.value)
        count.value = count.value + cardWidth - carouselRestToEnd
        cardWrap.style.transform = `translateX(${count.value}px)`
      }
      if (Math.abs(count.value) < cardWidth && isPrevArrow) {
        const carouselRestToBeginning = Math.abs(count.value)
        count.value = count.value + carouselRestToBeginning - cardWidth - gap
        cardWrap.style.transform = `translateX(${count.value}px)`
      }
      count.value = isPrevArrow ? count.value + cardWidth + gap : count.value - cardWidth - gap
      cardWrap.style.transform = `translateX(${count.value}px)`
    }
  }

  if (currentElem) {
    currentElem.addEventListener('click', cardMover)
  }
}
