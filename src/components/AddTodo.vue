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
        <label for="Select1">Category</label>
        <select class="form-control" id="Select1">
          <option>...</option>
          <option>Personal</option>
          <option>Team</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Textarea1">Description</label>
        <textarea class="form-control" id="Textarea1" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",

  data() {
    return {
      title: "",
      show: false
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const createTodo = {
        //id: uuid.v4(),
        title: this.title,
        status: "todo",
        category: this.category,
        description: this.description
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