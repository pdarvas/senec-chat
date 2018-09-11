import Rebase from 're-base';
import firebase from 'firebase';

export function initializeFirebase() {
  const fb = firebase.initializeApp({
    apiKey: "AIzaSyDm1Rfobar0N16KS0cm3r1_QSJinbLacjM",
    authDomain: "senecreact.firebaseapp.com",
    databaseURL: "https://senecreact.firebaseio.com",
    projectId: "senecreact",
    storageBucket: "senecreact.appspot.com",
    messagingSenderId: "111088903592"
  });

  const rebase = Rebase.createClass(fb.database());

  return {fb, rebase}
}

