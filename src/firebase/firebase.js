import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBPLLq9K1IoTawBVPXfIi1gcO_D7jgrxHs',
  authDomain: 'netflix-clone-72125.firebaseapp.com',
  projectId: 'netflix-clone-72125',
  storageBucket: 'netflix-clone-72125.appspot.com',
  messagingSenderId: '868297163265',
  appId: '1:868297163265:web:55cb7d9335d8450f3df600',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentification = firebase.auth();

export { authentification };
export default database;
