export default async function getData() {
  const url = "https://mocki.io/v1/5bae37d6-5a13-47cb-98f9-9b1809a0b109";

  const response = await fetch(url);
  const feedbackCardsData = await response.json();
  return feedbackCardsData;
}
