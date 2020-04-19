import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmmayFn3gLATQA0QIEuPh4dt53_7WDTgU',
  authDomain: 'todo-react-express.firebaseapp.com',
  databaseURL: 'https://todo-react-express.firebaseio.com',
  projectId: 'todo-react-express',
  storageBucket: 'todo-react-express.appspot.com',
  messagingSenderId: '113232614575',
  appId: '1:113232614575:web:47121e7e5cfaa645a5305a',
  measurementId: 'G-W6WV2LZD27',
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
