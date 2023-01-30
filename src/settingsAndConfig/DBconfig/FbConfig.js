import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY||"AIzaSyDUuccYuIC6OpjDzWIuU4KhgeJLQ8othNY",
  authDomain:process.env.REACT_APP_ATH_DOMAIN||"oyiboonlinemarket.firebaseapp.com",
  databaseURL:process.env.REACT_APP_DATABASEURL||"https://oyiboonlinemarket-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:process.env.REACT_APP_PROJECTID||"oyiboonlinemarket",
  storageBucket:process.env.REACT_APP_STORAGEBUCKET||"oyiboonlinemarket.appspot.com",
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID||"1066111715055",
  appId:process.env.REACT_APP_APPID||"1:1066111715055:web:6742f91dbb0f319ef93d1a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const Db = getFirestore();
const Storage = getStorage();
export {Db,Storage};
