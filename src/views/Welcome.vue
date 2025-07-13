<template>
  <div class="welcome container">
    <!-- <p>Welcome</p> -->
    <div v-if="showLoginForm">
    <Login></Login>
      <p>Not a Member? <span @click="showLoginForm=!showLoginForm">create account?</span></p>
    </div>
    <div v-else>
    <Signup></Signup>
    <p>Already member? <span @click="showLoginForm=!showLoginForm">Login Account</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup },
    setup(){
      let showLoginForm=ref(true);
      return {showLoginForm}
    }

}
</script>

<style>
.welcome {
  text-align: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #f9fafb, #e5e7eb);
  min-height: 100vh;
}

.welcome form {
  background: #ffffff;
  max-width: 400px;
  margin: 20px auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.welcome input {
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.welcome input:focus {
  border-color: #6366f1;
  outline: none;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.welcome button:hover {
  background-color: #4338ca;
}

</style>