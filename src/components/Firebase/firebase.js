import app from 'firebase/app';
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
/*
  dotenv setup
  1. create .env file in the root directory
  2. write your own api keys
  ex)
  REACT_APP_API_KEY: "YOUR_API_KEYS",
  REACT_APP_AUTH_DOMAIN: "YOUR_API_KEYS",
  REACT_APP_DATABASE_URL: "YOUR_API_KEYS",
  REACT_APP_PROJECT_ID: "YOUR_API_KEYS",
  REACT_APP_STORAGE_BUCKET: "YOUR_API_KEYS",
  REACT_APP_MESSAGING_SENDER_ID: "YOUR_API_KEYS",

*/

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.app = app.auth();
  }

  /* Authentication api methods */

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.doCreateUserWithEmailAndPassword(email, password);

  doSignInWithemailAndPassword = (email, password) =>
   this.auth.doSignInWithemailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
