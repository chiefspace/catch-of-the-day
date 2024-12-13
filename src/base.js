import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgjb5NHNPEMzcWv537SmORYAnN2VWwyAo",
    authDomain: "catch-of-the-day-ben-altieri.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ben-altieri-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;