import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAtuYdnr9UoPowfSvbOt9_TfR2C2nB7RAg",
  authDomain: "vueapp-ab096.firebaseapp.com",
  databaseURL: "https://vueapp-ab096-default-rtdb.firebaseio.com",
  projectId: "vueapp-ab096",
  storageBucket: "vueapp-ab096.appspot.com",
  messagingSenderId: "197097342210",
  appId: "1:197097342210:web:399e0dc47836ac6c226e1b",
  measurementId: "G-GM8CSKSRDR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;