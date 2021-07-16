import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-_NAcn1ZgP_kDrpKhZQ6SDySUzgm7IHA",
  authDomain: "my-instagram-6ee54.firebaseapp.com",
  projectId: "my-instagram-6ee54",
  storageBucket: "my-instagram-6ee54.appspot.com",
  messagingSenderId: "522043302001",
  appId: "1:522043302001:web:b82e83a869493dc575fbd0",
  measurementId: "G-WK4HVHQKF4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;