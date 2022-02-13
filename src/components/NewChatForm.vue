<template>
  <form>
      <textarea placeholder="type a message" v-model="message" @keypress.enter="handleSubmit">
         
      </textarea>
      <button @click.prevent="handleSubmit">Send</button>
      <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import {timestamp} from '../firebase/config'
import useCollection from '../composables/useCollection'

export default {
    setup() {
        const {user} = getUser()
        const message = ref('')
        const {error, addDoc} = useCollection('messages')

        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }
          
            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
        }

        return{
            message,
            handleSubmit,
            error
        }
    }
}
</script>

<style>
  form {
    margin: 10px;
    padding-bottom: 10px;
  }
  textarea { 
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: none;
  }
</style>