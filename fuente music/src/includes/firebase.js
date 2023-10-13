// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUduaop5wQ3N5MmCDw5axzGOXQsdUTcRc",
  authDomain: "fuente-music.firebaseapp.com",
  projectId: "fuente-music",
  storageBucket: "fuente-music.appspot.com",
//   messagingSenderId: "636604725772",
  appId: "1:636604725772:web:f3c481ea4fd5370a7a4c29"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();

const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection('users');
const songCollection = db.collection('song');
const commentCollection = db.collection('comment');

export {
  auth,
  db,
  storage,
  userCollection,
  songCollection,
  commentCollection
}
