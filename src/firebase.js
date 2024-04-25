import { initializeApp } from "firebase/app"

const firebaseConfig = { //tutaj trzeba uzupełnić własną konfiguracją

  apiKey: "",

  authDomain: "",

  projectId: "",

  storageBucket: "",

  messagingSenderId: "",

  appId: ""

};

export const app = initializeApp(firebaseConfig);