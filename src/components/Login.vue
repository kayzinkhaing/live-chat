<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password " v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <br>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';
export default {
    setup(){
        let email=ref("");
        let password=ref("");
        let {error,Login}=useLogin();
        let login=async ()=>{
            let  res=await Login(email.value,password.value);
            if(res){
              console.log("Login successful", res.user);
            }
        }

        return { email, password, login, error };
    }
}
</script>