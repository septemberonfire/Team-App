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
