import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRz3HZ3D8ml3zerq9Yo4Dt_SuNCjRNzfg",
  authDomain: "team-app-cc786.firebaseapp.com",
  databaseURL: "https://team-app-cc786-default-rtdb.firebaseio.com",
  projectId: "team-app-cc786",
  storageBucket: "team-app-cc786.appspot.com",
  messagingSenderId: "149706197577",
  appId: "1:149706197577:web:7b020a51c175f08e51cd98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

// const firebase = require('firebase');
// const firebaseui = require('firebaseui');
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });

// const uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '<url-to-redirect-to-on-success>',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: '<your-tos-url>',
//   // Privacy policy url.
//   privacyPolicyUrl: '<your-privacy-policy-url>'
// };