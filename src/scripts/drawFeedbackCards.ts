export default function drawCards() {
  const feedbackCards = [
    {
      name: "Nick Cave",
      job: "CMO ot Nokia",
      text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
      avatar: "./src/images/nick_cave.png",
      rate: 3,
    },
    {
      name: "Senya",
      job: "Frontend Dev",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laborum",
      avatar: "./src/images/photo_cv.jpg",
      rate: 5,
    },
    {
      name: "Katty Black",
      job: "CEO ot Subway",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laborum",
      avatar: "./src/images/kate.jpg",
      rate: 4,
    },
    {
      name: "Lana Rosenfeld",
      job: "Senior VP ot Pinterest",
      text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
      avatar: "./src/images/Avatar.png",
      rate: 2,
    },
  ];

  const cardsWrap = document.getElementById("cardsWrap");

  let allCardsString = "";

  feedbackCards.forEach((card) => {
    let rateString = ''
    for (let i = 0; i < card.rate; i++) {
      rateString = rateString + `<img
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
