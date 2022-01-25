import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey:"AIzaSyDUuccYuIC6OpjDzWIuU4KhgeJLQ8othNY",
  authDomain:"oyiboonlinemarket.firebaseapp.com",
  databaseURL:"https://oyiboonlinemarket-default-rtdb.europe-west1.firebasedatabase.app" ,
  projectId:"oyiboonlinemarket",
  storageBucket:"oyiboonlinemarket.appspot.com",
  messagingSenderId: "1066111715055",
  appId:"1:1066111715055:web:6742f91dbb0f319ef93d1a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore(); ;
export default db;
