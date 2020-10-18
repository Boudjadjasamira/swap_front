import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHhNBhHr8yGQCUt5DWypGGVwDhLpoNmIU",
  authDomain: "swap-edb73.firebaseapp.com",
  databaseURL: "https://swap-edb73.firebaseio.com",
  projectId: "swap-edb73",
  storageBucket: "swap-edb73.appspot.com",
  messagingSenderId: "301947546581",
  appId: "1:301947546581:web:092d3a2194f409a1e32b5c"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export { db };