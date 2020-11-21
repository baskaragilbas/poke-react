import firebase from 'firebase'

const  firebaseConfig = {
    apiKey: "AIzaSyCsfSkxfxJsJ2mY2tWPshZXxbMSQxjDXrc",
    authDomain: "poke-react-968d2.firebaseapp.com",
    databaseURL: "https://poke-react-968d2.firebaseio.com",
    projectId: "poke-react-968d2",
    storageBucket: "poke-react-968d2.appspot.com",
    messagingSenderId: "105179896175",
    appId: "1:105179896175:web:ac9b42aa3705382e0cb09a",
    measurementId: "G-94S6NB320F"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;