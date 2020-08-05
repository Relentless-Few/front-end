import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2phrpDT3jZUEBebpkSnTkz7g6n1tlHxc",
  authDomain: "devops-integrator.firebaseapp.com",
  databaseURL: "https://devops-integrator.firebaseio.com",
  projectId: "devops-integrator",
  storageBucket: "devops-integrator.appspot.com",
  messagingSenderId: "938379660788",
  appId: "1:938379660788:web:d52831f8a1ae84afe8bda1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
window.firebase = firebase;

export const provider = new firebase.auth.GithubAuthProvider();
export const signinWithGithub = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export default firebase;
