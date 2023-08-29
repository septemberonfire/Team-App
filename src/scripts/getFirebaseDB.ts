import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDRz3HZ3D8ml3zerq9Yo4Dt_SuNCjRNzfg', // hide
  authDomain: 'team-app-cc786.firebaseapp.com',
  databaseURL: 'https://team-app-cc786-default-rtdb.firebaseio.com',
  projectId: 'team-app-cc786',
  storageBucket: 'team-app-cc786.appspot.com',
  messagingSenderId: '149706197577',
  appId: '1:149706197577:web:7b020a51c175f08e51cd98', // hide
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
