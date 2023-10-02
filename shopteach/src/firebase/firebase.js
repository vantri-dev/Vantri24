import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const  app = firebase.initializeApp (
  {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSGAING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_AP,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  }
)
export const auth =app.auth()
export default app
