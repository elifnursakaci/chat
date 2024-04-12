// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Doğru modülü import et
import AsyncStorage from "@react-native-async-storage/async-storage"; // Doğru isimlendirme

// Your web app's Firebase configuration
import { getFirestore, collection } from "firebase/firestore"; // Doğru modülü import et

const firebaseConfig = {
  apiKey: "AIzaSyBG3r7W74zWT76RKSRt6fn7i69ld5vDssc",
  authDomain: "fir-chat-31b45.firebaseapp.com",
  projectId: "fir-chat-31b45",
  storageBucket: "fir-chat-31b45.appspot.com",
  messagingSenderId: "139218949075",
  appId: "1:139218949075:web:1199f504e3e3a2057d9526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with React Native persistence
export const auth = getAuth(); // getAuth fonksiyonunu kullanarak Firebase Authentication'ı başlatın

// Initialize Firestore
export const db = getFirestore(app);

// Define Firestore collections
export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
