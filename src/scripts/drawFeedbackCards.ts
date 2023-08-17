import getData from "./getFeedbackCards";

interface FeedbackCard {
  name: string;
  text: string;
  avatar: string;
  rate: number;
  job: string;
}

export default async function drawCards() {
  const feedbackCards: FeedbackCard[] = await getData();

  const cardsWrap = document.getElementById("cardsWrap");

  let allCardsString = "";

  feedbackCards.forEach((card) => {
    let rateString = "";
    for (let i = 0; i < card.rate; i++) {
      rateString =
        rateString +
        `<img
      src="./src/images/Star.png"
      alt="rating"
      class="feedback_cardRate"
    />`;
    }
    const cardHTML = `<div class="feedback_card">
    ${rateString}
    <p class="feedback_cardText">
      ${card.text}
    </p>
    <div class="feedback_userCard">
      <img
        src="${card.avatar}"
        alt="userAvatar"
        class="feedback_userAvatar"
      />
      <div class="feedback_userInfo">
        <h3 class="feedback_userName">${card.name}</h3>
        <p class="feedback_userJob">${card.job}</p>
      </div>
    </div>
  </div>`;

    allCardsString = `${allCardsString} ${cardHTML}`;
  });

  if (cardsWrap !== null) {
    cardsWrap.innerHTML = allCardsString;
  }
}
