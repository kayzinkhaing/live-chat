<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password " v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let signUp=async()=>{
            // console.log(displayName.value,email.value,password.value);
            try{
              let res=await createUserWithEmailAndPassword(auth,email.value,password.value)
              if(!res){
                throw new Error("could not create new user")
              }
            return (res.user);
            }catch(err){
              console.log(err.message);
            }
        }

        return {displayName, email, password,signUp}
    }
}
</script>