export default async function getData () {
  const url = 'https://mocki.io/v1/848af539-ff66-4481-bd11-bf8b72d8e5e3'

  const response = await fetch(url)
  const feedbackCardsData = await response.json();
  return feedbackCardsData
}

