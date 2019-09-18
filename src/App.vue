<template>
  <div id="app">
    <Header />
    <div
      class="view"
      style="background-image: url('https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?cs=srgb&dl=bay-beach-brazil-351283.jpg&fm=jpg');background-repeat:repeat; background-size: cover; background-position: center; height:100vh"
    >
      <div class="container">
        <AddTodo v-on:add-todo="addTodo" />

        <!-- Button to toggle view btween All, Personal, and Team -->
        <div class="row">
          <div class="col-sm">
            <button :class="{active: filter = 'all'}" @click="runFilter('all')">All</button>
          </div>
          <div class="col-sm">
            <button :class="{active: filter = 'personal'}" @click="runFilter('personal')">Personal</button>
          </div>
          <button :class="{active: filter = 'team'}" @click="runFilter('team')">Team</button>
        </div>
        <div class="row">
          <button v-if="showClearDoneBtn" @click="clearDone">Clear Done Tasks</button>
        </div>

        <div class="row">
          <!--Board 1 is the To Do list -->
          <Board style="padding-right:2px;" class="col-sm-12 col-md-3 col-lg-3" id="ToDos">
            <Card style="margin-top:10px;" v-for="(card,i) in cardsFiltered" v-bind:key="i" v-show="card.status =='todo'">
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <a
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >Delete</a>
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm"
              >Move Forward</button>
            </Card>
          </Board>
          <!--Board 2 is the In Progress-working list -->
          <Board style="padding-right:2px;" class="col-sm-12 col-md-3 col-lg-3" id="inProgress">
            <Card style="margin-top:10px;"
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='inProgress'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <a
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >Delete</a>
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm"
              >Move Forward</button>
            </Card>
          </Board>
          <!--Board 3 is the In Progress-waiting list -->
          <Board style="padding-right:2px;" class="col-sm-12 col-md-3 col-lg-3" id="inProgressWaiting">
            <Card style="margin-top:10px;"
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='inProgressWaiting'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <a
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >Delete</a>
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm"
              >Move Forward</button>
            </Card>
          </Board>
          <!--Board 4 is the Completed list -->
          <Board style="padding-right:2px;" class="col-sm-12 col-md-3 col-lg-3" id="completed">
            <Card style="margin-top:10px;" v-for="(card,i) in cardsFiltered" v-bind:key="i" v-show="card.status =='done'">
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <a
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >Delete</a>
            </Card>
          </Board>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Layouts/Header";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import Board from "./components/Board";
import Card from "./components/Card";

export default {
  name: "app",
  components: {
    Header,
    AddTodo,
    Board,
    Card
  },
  data() {
    return {
      cards: [],
      cardsFiltered: [],
      filter: "all"
    };
  },

  methods: {
    runFilter(filter) {
      console.log("filter running");
      if (filter == "all") {
        this.cardsFiltered = this.cards;
      } else if (filter == "personal") {
        this.cardsFiltered = this.cards.filter(
          card => card.category == "Personal"
        );
        console.log("Personal tasks");
        console.log(this.cardsFiltered);
        //console.log(this.cards);
      } else if (filter == "team") {
        this.cardsFiltered = this.cards.filter(card => card.category == "Team");
      }
    },

    deleteTodo(id) {
      axios
        .delete("/api/todos/" + id)
        .then(res => (this.cards = res.data))
        .catch(error => console.log(error));

      axios
        .get("/api/todos")
        .then(res => (this.cards = res.data))
        .catch(error => console.log(error));
    },

    addTodo(createTodo) {
      const { title, category, description, status } = createTodo;

      axios
        .post("/api/todos", {
          title,
          category,
          description,
          status: "todo"
        })
        .then(res => (this.cards = [...this.cards, res.data]))
        .catch(error => console.log(error));
    },

    updateTodo(id, title, category, description, status) {
      if (status === "todo") {
        status = "inProgress";
      } else if (status === "inProgress") {
        status = "inProgressWaiting";
      } else if (status === "inProgressWaiting") {
        status = "done";
      }
      console.log(id, title, category, description, status);
      axios
        .put("/api/todos", {
          id,
          title,
          category,
          description,
          status
        })
        .then(res => (this.cards = [...this.cards, res.data]))
        .catch(error => console.log(error));
      console.log("this is updated");

      axios
        .get("/api/todos")
        .then(res => (this.cards = res.data))
        .catch(error => console.log(error));
    }
  },
  created() {
    axios
      .get("/api/todos")
      .then(res => {
        this.cardsFiltered = this.cards = res.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
.container {
  /* background-image: url("https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?cs=srgb&dl=bay-beach-brazil-351283.jpg&fm=jpg"); */
  background-size: 100%;
}
.row {
  margin-top: 20px;
}
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");

</style>

