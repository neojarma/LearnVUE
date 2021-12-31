<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add a New Project</router-link>
  </div>

  <router-view />
</template>

<script>
import Home from './views/Home.vue'

export default {
  component:{Home}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html{
  background-color: #eee;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 4px;
  box-sizing: border-box;
}

#nav a.router-link-exact-active {
  border-bottom: 2px solid #42b983;
}
</style>
