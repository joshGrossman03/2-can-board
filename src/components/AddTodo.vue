<template>

  <div>
    <button @click="show = !show" class="btn btn-info">Add Task</button>
    <form v-if="show">
      <div class="form-group">
        <label for="Input1">Task Title</label>
        <input
          type="text"
          v-model="title"
          class="form-control"
          id="Input1"
          placeholder="Add Title..."
        />
      </div>
      <div class="form-group">

        <label for="cat">Category</label>
        <select v-model="category" class="form-control" id="cat">

          <option>...</option>
          <option>Personal</option>
          <option>Team</option>
        </select>
      </div>
      <div class="form-group">

        <label for="desc">Description</label>
        <textarea v-model="description" class="form-control" id="desc" rows="3" placeholder="description" ></textarea>
       {{this.title}}{{this.category}}{{this.description}}
      </div>
       <button @click="addTodo">Submit</button> 

    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",

  data() {
    return {
      title: "",
      category:"",
      description:"",
      show: false
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const createTodo = {
        title: this.title,
        category: this.category,
        description: this.description,
        status: "todo",
        
       
      };
      //send up to parent
      this.$emit("add-todo", createTodo);
      //clear out input
      this.title = "";
      this.category = "";
      this.description = "";
    }
  }
};
</script>



<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
</style>