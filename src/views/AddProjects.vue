<template>
  <div class="add-project">
    <form @submit.prevent="submit">
      <label>Project Name : </label>
      <input type="text" v-model="projectName" required>
      <label>Project Description : </label>
      <input type="text" v-model="projectDesc">

      <button>SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      projectName: '',
      projectDesc: '',
      url:'http://localhost:3000/Projects'
    }
  },
  methods:{
    submit(){
      fetch(this.url, {
        method:'POST',
        body: JSON.stringify({
          name:this.projectName.trim(),
          desc:this.projectDesc.trim(),
          completed:false
        }),
        headers: {'Content-type':'application/json'}
      }).then(() => this.$router.push('/'))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.add-project{
  width: 550px;
  background-color: white;
  margin: auto;
  padding: 16px;
  border-radius: 8px;
  text-align: left;
}
.add-project label{
  text-align: left;
  display: block;
  font-weight: 700;
}

.add-project input{
  height: 48px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #4DB2EC;
}

.add-project input:focus{
  outline: none;
}

form{
  text-align: center;
}

form button{
  background-color: #4DB2EC;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 4px;
  color: black;
  font-weight: 500;
  width: 100px;
  cursor: pointer;
}
</style>