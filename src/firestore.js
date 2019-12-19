import firebase from 'firebase';
// import Rebase from "re-b";

const firebaseConfig = {
    apiKey: "AIzaSyD0hXSssv9RFepQoe5JAxYwII6D2kpNBUA",
    authDomain: "moviebooking-3f5d9.firebaseapp.com",
    databaseURL: "https://moviebooking-3f5d9.firebaseio.com",
    projectId: "moviebooking-3f5d9",
    storageBucket: "moviebooking-3f5d9.appspot.com",
    messagingSenderId: "1009506631693",
    appId: "1:1009506631693:web:ac35a711466394a8441544",
    measurementId: "G-3Z3YX1L7Q1"
};
firebase.initializeApp(firebaseConfig);
// const base = Rebase.createClass(firebase.database());

export default firebase;
