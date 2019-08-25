import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDbTHqmAQ-O4zbo6aDYQy8P4bOxULTtc5k",
  authDomain: "crwn-db-f258b.firebaseapp.com",
  databaseURL: "https://crwn-db-f258b.firebaseio.com",
  projectId: "crwn-db-f258b",
  storageBucket: "",
  messagingSenderId: "784230425824",
  appId: "1:784230425824:web:26936107d94a6ac1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;