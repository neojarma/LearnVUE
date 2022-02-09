<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner'
import {useRoute} from 'vue-router'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    //unnecessary
    const route = useRoute()

    const {post, error, load} = getPost(props.id)

    load()

    return {
      post,
      error
    }
  }
}
</script>

<style>

</style>