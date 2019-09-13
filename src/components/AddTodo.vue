<template>
  <div>
    <button @click="show = !show" class="btn btn-info">Add Issue</button>
    <form v-if="show">
      <div class="form-group">
        <label for="Input1">Issue Title</label>
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
        <label for="Textarea1">Example textarea</label>
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
      show:false,
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const createTodo = {
        //id: uuid.v4(),
        title: this.title,
        completed: false
      };
      //send up to parent
      this.$emit("add-todo", createTodo);
      //clear out input
      this.title = "";
    },
    addIssue(e) {
      e.preventDefault();
      const createIssue = {
        title: this.title
      };
      this.$emit("add-issue", createIssue);
      this.title = "";
    }
  }
};

</script>



<style scoped>

@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");

</style>