import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADL6Q6QSl2VeFWLCNJonrP3HjTmE9HuuM",
  authDomain: "my-profile-page-67bc7.firebaseapp.com",
  projectId: "my-profile-page-67bc7",
  storageBucket: "my-profile-page-67bc7.appspot.com",
  messagingSenderId: "465818946702",
  appId: "1:465818946702:web:32e37ad23b3c4991a04ddf"
};


const firebaseApp = initializeApp(firebaseConfig);

export { firebaseConfig, firebaseApp };