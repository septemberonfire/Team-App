export default function () {
  let count = { value: 0 };
  addListenersForMovingFeedback({ isPrevArrow: true, count });
  addListenersForMovingFeedback({ isPrevArrow: false, count });
}

function addListenersForMovingFeedback({
  isPrevArrow,
  count,
}: {
  isPrevArrow: boolean;
  count: { value: number };
}) {
  const prevArrow = document.querySelector("#prev-arrow");
  const nextArrow = document.querySelector("#next-arrow");
  const cardWrap = document.querySelector("#cardsWrap") as HTMLElement;

  let changePos: number;
  const wrapperCardsWidth = cardWrap.offsetWidth;
  const countElemenets = cardWrap.childElementCount;
  const paddingRight = 40;
  const gap = 16;
  const cardWidth = (cardWrap.children[0] as HTMLElement).offsetWidth;
  const maxWidth =
    cardWidth * countElemenets +
    gap * (countElemenets - 1) -
    wrapperCardsWidth +
    paddingRight;
  const currentElem = isPrevArrow ? prevArrow : nextArrow;

  function cardMover() {
    changePos = setInterval(() => {
      if (cardWrap) {
        if (count.value === 0 && isPrevArrow) {
          cardWrap.style.transform = `translateX(${count.value}px)`;
          return;
        }
        if (Math.abs(count.value) > maxWidth && !isPrevArrow) {
          cardWrap.style.transform = `translateX(${count.value}px)`;
          return;
        }
        count.value = isPrevArrow ? count.value + 2 : count.value - 2;
        cardWrap.style.transform = `translateX(${count.value}px)`;
      }
    }, 1);
  }

  if (currentElem) {
    currentElem.addEventListener("mousedown", cardMover);
    currentElem.addEventListener("touchstart", cardMover);
    currentElem.addEventListener("mouseup", () => clearInterval(changePos));
    currentElem.addEventListener("touchend", () => clearInterval(changePos));
    currentElem.addEventListener("mouseleave", () => clearInterval(changePos));
  }


}
