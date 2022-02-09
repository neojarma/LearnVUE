<template>
  <div>
      <h3>tags</h3>
      <div v-for="tag in tags" :key="tag">
        <router-link :to="{ name : 'Tag', params:{tag: tag} }">
          #{{tag}}
        </router-link>
      </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags.js'

export default {
    props: ['posts'],
    setup(props) {
        const {tags} = useTags(props.posts)

        return { tags }
    }
}
</script>

<style>

</style>