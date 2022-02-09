<template>  
  <div>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="postWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import getPost from '../composables/getPosts.js'
import {useRoute} from 'vue-router'
import { computed } from 'vue'

export default {
  components: { PostList, Spinner },

  setup() {
    const route = useRoute()
    const {posts, error, load} = getPost()
    load()

    const postWithTag = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag))
    })

    return { error, postWithTag, posts }
  }
}
</script>

<style>

</style>