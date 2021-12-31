<template>
  <div class="content">
    <div class="desc">
        <h3 @click.prevent="isShow = !isShow">{{project.name}}</h3>
        <p v-if="isShow">{{project.desc}}</p>
    </div>
    <div class="icons-menu">
        <router-link :to="{name: 'EditProjects', params: {id: project.id}}">
        <span class="material-icons-round" @click="editProject">edit</span>
        </router-link>
        <span class="material-icons-round" @click="deleteProject">delete</span>
        <span class="material-icons-round" @click="toggle">done</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data(){
        return {
            isShow:false,
            url:'http://localhost:3000/Projects/'+this.project.id,
        }
    },
    methods:{
        toggle(){
            fetch(this.url, {
                method: 'PATCH',
                body: JSON.stringify({completed: !this.project.completed}),
                headers:{"content-type":"application/json"}
            }).then(() => this.$emit('completeEv', this.project.id))
            .catch(err => console.log(err))
        },
        deleteProject(){
            fetch(this.url, {
                method: 'DELETE'
            }).then(() => this.$emit('deleteEv', this.project.id))
            .catch(err => console.log(err))
        },
    },
    emits:['deleteEv', 'completeEv']
}
</script>

<style>
.content .desc p{
    text-align: left;
}
.icons-menu a{
    color: #2C3E50;
}
</style>