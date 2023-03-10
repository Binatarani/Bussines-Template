import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyr9OZm-HoyISAYNOQ3ZK48ODk8CsJl4I",
  authDomain: "first-project-33397.firebaseapp.com",
  projectId: "first-project-33397",
  storageBucket: "first-project-33397.appspot.com",
  messagingSenderId: "2927181061",
  appId: "1:2927181061:web:249ad771166b8e2e070b6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
