<template>
  <div class="home">
    <div class="filter-menu">
      <span @click="updateFilter('all')" :class="{activeMenu : current === 'all'}">VIEW ALL</span>
      <span @click="updateFilter('completed')" :class="{activeMenu : current === 'completed'}">COMPLETED</span>
      <span @click="updateFilter('ongoing')" :class="{activeMenu : current === 'ongoing'}">ONGOING</span>
    </div>
    <div class="list" v-for="project in filtered" :key="project.id" :class="{done : project.completed}">
      <CardProject :project="project" @deleteEv="handleDelete" @completeEv="handleComplete"/>
    </div>
  </div>
</template>

<script>
import CardProject from '../components/CardProject.vue'

export default {
  name: 'Home',
  components:{CardProject},
  data () {
    return {
      url:'http://localhost:3000/Projects',
      projects : [],
      current: 'all'
    }
  },
  methods:{
    handleDelete(id){
      this.projects = this.projects.filter(project => project.id !== id)
    },
    handleComplete(id){
      //update
      this.projects.map(project => {
        if(project.id === id){
          project.completed = !project.completed
        }
      })
    },
    updateFilter(menu){
      this.current = menu
      filterList()
    }
  },
  mounted(){
    fetch(this.url)
      .then(value => value.json())
      .then(value => this.projects = value)
      .catch(err => err.message)
  },
  computed:{
    filtered(){
      if(this.current === 'completed'){
        return this.projects.filter(project => project.completed === true)
      }else if(this.current === 'ongoing'){
        return this.projects.filter(project => project.completed === false)
      }return this.projects
    }
  }
}
</script>

<style>
.home{
  box-sizing: border-box;
  max-width: 650px;
  margin: auto;
}

.filter-menu{
  text-align: left;
  margin-bottom: 16px;
}

.desc{
  cursor: pointer;
}

.desc h3{
  text-align: left;
}

.filter-menu span{
  cursor: pointer;
  margin-right: 20px;
  font-weight: 500;
}

.activeMenu{
  font-weight: 700 !important;
}

.list{
  border-radius: 7px;
  padding: 0 8px;
  margin-bottom: 8px;
  border-left: 4px solid crimson;
  background-color: white;
}

.list .icons-menu span{
  margin-right: 8px;
  font-size: 20px;
  cursor: pointer;
}

.list .content{
  display: flex;
  justify-content: space-between;
  align-items: center;
} 

.done{
  border-left: 4px solid royalblue;
}
</style>
