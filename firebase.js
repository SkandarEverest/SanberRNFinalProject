// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQGa-iKzv_1ZRN28halRD1Sp-Ret15zRs",
  authDomain: "causal-lattice-294220.firebaseapp.com",
  databaseURL: "https://causal-lattice-294220.firebaseio.com",
  projectId: "causal-lattice-294220",
  storageBucket: "causal-lattice-294220.appspot.com",
  messagingSenderId: "195642485712",
  appId: "1:195642485712:web:09b39cc1bc2b9e662467d5",
  measurementId: "G-SK2J8DFFSM"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };