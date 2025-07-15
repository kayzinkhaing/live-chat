import { ref } from "vue";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

let error = ref(null);

let createAccount = async (email, password, displayName) => {
  error.value = null;
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not create new user");
    }

    // Firebase v11+ updateProfile usage
    await updateProfile(res.user, { displayName: displayName });

    console.log(res.user);
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
