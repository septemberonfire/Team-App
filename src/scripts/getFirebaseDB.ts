import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'team-app-cc786.firebaseapp.com',
  databaseURL: 'https://team-app-cc786-default-rtdb.firebaseio.com',
  projectId: 'team-app-cc786',
  storageBucket: 'team-app-cc786.appspot.com',
  messagingSenderId: '149706197577',
  appId: import.meta.env.VITE_APP_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
