import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD391a8_sAdYzRgjdXz0bf3Wkyr31uDAk0",
  authDomain: "devtools-1711393058173.firebaseapp.com",
  projectId: "devtools-1711393058173",
  storageBucket: "devtools-1711393058173.appspot.com",
  messagingSenderId: "910988416373",
  appId: "1:910988416373:web:fd2163504c262afe7cef3c",
  measurementId: "G-WM0F8JQB16",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
