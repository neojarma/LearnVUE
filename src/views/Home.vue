<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
      <tag-cloud  :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud, TagCloud, TagCloud },
  setup() { 
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>
