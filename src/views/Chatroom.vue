<template>
  <div class="container">
    <Navbar />
    <chatWindow />
    <new-chat-form />
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import chatWindow from '../components/ChatWindow.vue'

export default {
    components: {
        Navbar,
        NewChatForm,
        chatWindow
    },
}
</script>

<style>

</style>