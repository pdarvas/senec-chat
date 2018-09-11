import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {initializeFirebase} from "./firebaseConfig";

const {fb, rebase} = initializeFirebase();

ReactDOM.render(<App fb={fb} rebase={rebase} />, document.getElementById('root'));