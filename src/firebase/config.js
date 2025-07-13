// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Import Auth

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBLspW4l_7_OXxECZr3l-toZDFoaOsUud0",
  authDomain: "vue-blog-system-fb07d.firebaseapp.com",
  projectId: "vue-blog-system-fb07d",
  storageBucket: "vue-blog-system-fb07d.appspot.com",
  messagingSenderId: "932691693777",
  appId: "1:932691693777:web:359d8b95ea90f602e8b5f0",
  measurementId: "G-DPB756B8H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app); // ✅ Initialize Auth

// Export everything needed
export { db, auth, serverTimestamp };
