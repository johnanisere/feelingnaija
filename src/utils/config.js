const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
const firebaseConfig = {
  apiKey: "AIzaSyDtiR3ZouQtc8fDw3yo_qzWeWXMKqVBl3k",
  authDomain: "feelingnaija.firebaseapp.com",
  databaseURL: "https://feelingnaija.firebaseio.com",
  projectId: "feelingnaija",
  storageBucket: "feelingnaija.appspot.com",
  messagingSenderId: "1093601035113",
  appId: "1:1093601035113:web:2b59fb8a76cbdf9b87b3f8",
  measurementId: "G-09C895PQ5N"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;
