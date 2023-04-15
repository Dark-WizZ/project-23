import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyAxUloQPGQja0UkUD6UFHdX-INFg7HfXRA",

  authDomain: "project-23-78942.firebaseapp.com",

  projectId: "project-23-78942",

  storageBucket: "project-23-78942.appspot.com",

  messagingSenderId: "719053375837",

  appId: "1:719053375837:web:80dce2ef55b0a57ac940b4"

};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();