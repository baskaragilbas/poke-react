import firebase from 'firebase'

const  firebaseConfig = {
    // put config here
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;