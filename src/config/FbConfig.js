import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain:process.env.REACT_APP_ATH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASEURL ,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_APPID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const Db = getFirestore();
const Storage = getStorage();
export {Db,Storage};
