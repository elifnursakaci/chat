// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from"@react-native-async-storage/async-storage"
import { getFirestore ,collection} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAuWSVJegMy2D2rRiL7_BWW-RZXLeXVsI",
  authDomain: "fir-chat-7344b.firebaseapp.com",
  projectId: "fir-chat-7344b",
  storageBucket: "fir-chat-7344b.appspot.com",
  messagingSenderId: "636868223691",
  appId: "1:636868223691:web:b40b864baa431ac2c0b14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const userRef =collection(db, "users");
export const roomRef = collection(db, "rooms");