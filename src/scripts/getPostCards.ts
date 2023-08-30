import { ref, get, child, Database } from 'firebase/database'

export default async function getPostCards(database: Database, additionalDBParam = '') {
  let result

  const dbRef = ref(database)
  await get(child(dbRef, `/Posts${additionalDBParam}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        result = snapshot.val()
      } else {
        console.warn('No data available')
      }
    })
    .catch((error) => {
      console.error(error)
    })
  return result
}

/*
написать функцию getPost которая на вход будет принимать database и индекс поста ${index}. на основе этого индекса надо получать нужный пост
*/
