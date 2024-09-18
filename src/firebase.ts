import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBN9s_Iay--poFFXj4PgiTdBrkq0jU_asE",
  authDomain: "employee-vcard.firebaseapp.com",
  projectId: "employee-vcard",
  storageBucket: "employee-vcard.appspot.com",
  messagingSenderId: "917454868647",
  appId: "1:917454868647:web:291609f99026e46a32cb82"
})

export const auth = app.auth()
export default app
