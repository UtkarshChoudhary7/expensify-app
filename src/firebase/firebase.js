import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDyabEW6vrj0P-23Hk_LwcHRRS9GZ6T2bw",
  authDomain: "webapptest-86600.firebaseapp.com",
  databaseURL: "https://webapptest-86600.firebaseio.com",
  projectId: "webapptest-86600",
  storageBucket: "webapptest-86600.appspot.com",
  messagingSenderId: "109684742707"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
