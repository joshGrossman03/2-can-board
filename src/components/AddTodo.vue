<template>
  <div>
    <button @click="show = !show" class="btn btn-info addTaskBtn">
      <i class="material-icons">add_box</i> Add Task
    </button>
    <form v-if="show">
      <div class="form-group">
        <label for="title">Task Title</label>
        <input
          type="text"
          v-model="title"
          class="form-control"
          id="title"
          placeholder="Add Title..."
        />
      </div>
      <div class="form-group">
        <label for="cat">Category</label>
        <select
          v-model="category"
          class="form-control"
          id="cat"
          placeholder="Is this a personal task or a team task?"
        >
          <option>...</option>
          <option>Personal</option>
          <option>Team</option>
        </select>
      </div>
      <div class="form-group">
        <label for="desc">Description</label>
        <textarea
          v-model="description"
          class="form-control"
          id="desc"
          rows="3"
          placeholder="What do you have to do?"
        ></textarea>
        <!-- {{this.title}}{{this.category}}{{this.description}} -->
      </div>
      <button class="submitTask" @click="addTodo">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",

  data() {
    return {
      title: "",
      category: "",
      description: "",
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
        status: "todo"
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

button,
input[type="button"],
input[type="submit"] {
  background: #ff8c00;
}

button:hover {
  background: #ffc000;
}

.addTaskBtn.hover {
  background: #ffc000;
}
.addTaskBtn {
  margin: 10px 10px 10px 10px;
}
.addTaksBtn.active {
  background: #ff8c00;
}

.submitTask {
  margin: 0px 0px 20px 10px;
  color: white;
}

.material-icons {
  vertical-align: middle !important;
  padding-bottom: 3px;
}
</style>