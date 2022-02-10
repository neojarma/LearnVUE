<template>
  <div v-if="error">{{error}}</div>
  <div v-if="post">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
    <button @click="handleClick">delete</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner'
import {useRouter} from 'vue-router'
import {projectFirestore} from '../firebase/config'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    //unnecessary
    const router = useRouter()

    const {post, error, load} = getPost(props.id)

    load()

    const handleClick = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()
      router.push('/')
    }

    return {
      post,
      error,
      handleClick
    }
  }
}
</script>

<style>

</style>