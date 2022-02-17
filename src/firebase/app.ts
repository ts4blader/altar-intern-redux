import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import usersData from "./users.json"
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCGJLq4ob4oaULEIbUSh372_9XULYMoxTs",
  authDomain: "altar-intern.firebaseapp.com",
  projectId: "altar-intern",
  storageBucket: "altar-intern.appspot.com",
  messagingSenderId: "808742467445",
  appId: "1:808742467445:web:1160a58d53fe7655aa053c"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export const seedData = () => {
    console.log("run");
    usersData.forEach((user) => {
        addDoc(collection(db, "users"), user);
    })
}

export {firebase, db}