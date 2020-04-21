import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebase = require('firebase')
require('firebase/firestore')


firebase.initializeApp({
  apiKey: "AIzaSyAkRU4lg_BSJNwfOmrPanmEWYzB0DEYcnQ",
  authDomain: "evernote-clone-35afb.firebaseapp.com",
  databaseURL: "https://evernote-clone-35afb.firebaseio.com",
  projectId: "evernote-clone-35afb",
  storageBucket: "evernote-clone-35afb.appspot.com",
  messagingSenderId: "935707292463",
  appId: "1:935707292463:web:a69cc85525e94ff4f067da",
})


ReactDOM.render(
    <App />
  ,
  document.getElementById('evernote-container')
);


