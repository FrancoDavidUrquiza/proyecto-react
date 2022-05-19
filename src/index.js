import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './store/cart-context.js';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpslwm63l1j_k2PrvdYCWDiWcQbgYUZ7U",
  authDomain: "proyecto-react-crochet.firebaseapp.com",
  projectId: "proyecto-react-crochet",
  storageBucket: "proyecto-react-crochet.appspot.com",
  messagingSenderId: "696745873729",
  appId: "1:696745873729:web:f77379dc0e0e9e2fd751c0"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


