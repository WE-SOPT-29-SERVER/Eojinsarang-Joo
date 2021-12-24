const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyD2h5LeK96dVY28NkmWSmSk1EV2pEnm8_I",
  authDomain: "wesopt29-fb85f.firebaseapp.com",
  projectId: "wesopt29-fb85f",
  storageBucket: "wesopt29-fb85f.appspot.com",
  messagingSenderId: "853828385051",
  appId: "1:853828385051:web:1476abba4313d1f34efbbe",
  measurementId: "G-2WXPQ6Z7X0",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
