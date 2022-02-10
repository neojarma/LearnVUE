<template>
  <div>
    
    <!-- create a form take takes 3 input field and labels for title, content and tags -->
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" />
      <label for="content">Content</label>
      <textarea id="content" v-model="content"></textarea>
      <label for="tags">Tags</label>

      <input 
        type="text" 
        id="tags"
        v-model="tag" 
        @keydown.enter.prevent="handleKeyDown"
      />

      <!-- looping div tags -->
        <div v-for="tag in tags" :key="tag">
            #{{ tag }}
        </div>
      <button type="submit">Create Post</button>
    </form>

  </div>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

export default {
    setup() {
        const title = ref('')
        const content = ref('')
        const tag = ref('')
        const tags = ref([])

        const router = useRouter()
        
        const handleKeyDown = () => {
            //check if the value already exists in the tags array
            if(!tags.value.includes(tag.value)) {
                //remove all whitespace
                tags.value.push(tag.value.trim())
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: content.value,
                tags: tags.value,
                createdAt: timestamp()
            }

            const res = await projectFirestore.collection('posts').add(post)

            router.push('/')
        }

        return {
            title,
            content,
            tags,
            handleKeyDown,
            tag,
            handleSubmit
        }
    }
}
</script>

<style>

</style>