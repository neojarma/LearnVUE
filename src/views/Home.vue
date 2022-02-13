<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <login-form @login="enterChat" />
      <p @click="showLogin = !showLogin" class="dialog">Create a new account</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <signup-form @signup="enterChat" />
      <p @click="showLogin = !showLogin" class="dialog">Back to login</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import {useRouter} from 'vue-router'

export default {
  components: {
    SignupForm,
    LoginForm
  },

  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({name: 'Chatroom'})
    }

    return {
      showLogin,
      enterChat
    }
  },
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .dialog{
    width: fit-content;
    margin: 30px auto 0;
    cursor: pointer;

  }
</style>