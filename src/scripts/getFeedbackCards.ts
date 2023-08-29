import { ref, get, child, Database } from 'firebase/database'

export default async function getData(database: Database) {
  let result

  const dbRef = ref(database)
  await get(child(dbRef, `/feedbackCards`))
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
