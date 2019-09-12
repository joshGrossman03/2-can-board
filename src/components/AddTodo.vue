<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Title ...">
            <input type="text" name="Description" id="description" placeholder="Add Description.."><br>
            <input type="radio" name="Category" id="category" label="Personal"> Personal<br>
            <input type="radio" name="Category" id="category" label="Personal"> Team<br>
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
//import uuid from 'uuid';
export default {
    name:"AddTodo",
    data(){
        return {
            title:''
        }
    },
    methods:{
       addTodo(e) {
           e.preventDefault();
           const createTodo = {
               //id: uuid.v4(),
               title: this.title,
               completed:false
           }
           //send up to parent
           this.$emit('add-todo', createTodo);
           //clear out input
           this.title = '';
       }
    }
}
</script>



<style scoped>

form{
    display: inline-block;
}

input[type="text"] {
 flex:20;
 padding: 5px;
}

input[type="submit"]{
    flex:2;
}

input[type="radio"]{
    flex:1;

}

</style>