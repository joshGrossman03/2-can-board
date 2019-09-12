<template>
    <div  v-bind:id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    v-bind:class="{'is-complete':todo.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo',todo.id)" class="del">x</button>
            
        </p>
    </div>
</template>


<script>
export default {
    name: "TodoItem",
    props:["todo"],
    methods: {
        markComplete(){
            this.todo.completed = !this.todo.completed;
        }
    }

}
</script>



<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete{
        text-decoration: line-through;

    }

    .del{
        background: red;
        color:#fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float:right;
    }
</style>