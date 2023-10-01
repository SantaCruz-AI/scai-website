// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { sendEmail } from "./nodemailer";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7RIrAMqLiq7832QIVsbsaCVfnZswxiAI",
  authDomain: "ucsc-ai.firebaseapp.com",
  projectId: "ucsc-ai",
  storageBucket: "ucsc-ai.appspot.com",
  messagingSenderId: "800514766003",
  appId: "1:800514766003:web:feab46fa5c73b02558ecc6",
  measurementId: "G-1ZT0FJXY1V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const newsLetterSignUp = async (email: string) => {
  try {
    const docRef = doc(firestore, "subscribers", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Email already exisits: ");
    } else {
      console.log("Email needs to be added to firestore");
      const docRes = await setDoc(doc(firestore, "subscribers", email), {});
      console.log(docRes);
      await sendEmail(
        "News letter confirmation.",
        "asdfkja;slk fjaslkdfj asldfjasdkf",
        email
      );
    }
  } catch (error) {
    console.log("Error subscribing:", error);
  }
};
