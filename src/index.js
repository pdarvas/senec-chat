import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {initializeFirebase} from "./firebaseConfig";

const {auth, rebase} = initializeFirebase();

ReactDOM.render(<App auth={auth} db={rebase} />, document.getElementById('root'));