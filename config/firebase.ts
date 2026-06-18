import { initializeApp } from "firebase/app";
// @ts-ignore - TS thinks this doesn't exist in web typings, but it exists in RN runtime.
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQrbJr8BAs4p9Rcf93sEl--tze99gBd1E",
  authDomain: "laza-b12ea.firebaseapp.com",
  projectId: "laza-b12ea",
  storageBucket: "laza-b12ea.firebasestorage.app",
  messagingSenderId: "901621084225",
  appId: "1:901621084225:web:c794bf14a4588c08f216c0",
  measurementId: "G-DN806EPXEX",
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Safely create persistence using AsyncStorage directly
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
