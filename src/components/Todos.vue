<template>
<div>
    <transition-group name="todo" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
    <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>  
    </div>
    </transition-group>
</div>
</template>


<script>
import TodoItem from './Todoitem';

export default {
    name:"Todos",
    components:{
        TodoItem
    },
    props:["todos"]
}
</script>



<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
</style>