<template>
  <div id="app">
    <Header />
    <div
      class="view"
     
    >
      <div class="container">
        <AddTodo v-on:add-todo="addTodo" />

        <!-- Button to toggle view btween All, Personal, and Team -->
        <div class="row">
          <div class="col-sm col-md col-lg">
            <button
              class="viewFilters allBtn"
              :class="{active: filter = 'all'}"
              @click="runFilter('all')"
            >View All Tasks</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2 col-md-2 col-lg-2">
            <button
              class="viewFilters personalFilter"
              :class="{active: filter = 'personal'}"
              @click="runFilter('personal')"
            >View Personal Tasks</button>
          </div>

          <div class="col-sm-4 col-md-4 col-lg-4">
            <button
              class="viewFilters teamFilter"
              :class="{active: filter = 'team'}"
              @click="runFilter('team')"
            >View Team Tasks</button>
          </div>

          <!-- Button to clear "Done" items -->
          <div class="col-sm-6 col-md-6 col-lg-6">
            <button class="clearDoneBtn" @click="clearDone('done')">Clear Done Tasks</button>
          </div>
        </div>

        <!-- start task board section -->
        <div class="row">
          <!--Board 1 is the To Do list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="ToDos">
            <h3>To Do</h3>
            <Card
            
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='todo'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>

              <!-- Button that advances card to next status -->
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm"
              >Move Forward</button>
              <!-- Button that will delete a task/card to next status -->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >Delete</button>
            </Card>
          </Board>
          <!--Board 2 is the In Progress-working list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="inProgress">
            <h3>In Progress</h3>
            <Card
              
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='inProgress'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <!-- Button that advances card to next status -->
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm"
              >Move Forward</button>
              <!-- Button that will delete a task/card -->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm "
              >Delete</button>
            </Card>
          </Board>
          <!--Board 3 is the In Progress-waiting list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="inProgressWaiting">
            <h3>In Progress - Waiting</h3>
            <Card
            
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='inProgressWaiting'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <!-- Button that will move a task/card to next status -->
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm "
              >Move Forward</button>
              <!-- Button that will delete a task/card -->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm "
              >Delete</button>
            </Card>
          </Board>
          <!--Board 4 is the Completed list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="completed">
            <h3>Done!</h3>
            <Card
              
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='done'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>
              <!-- Button that will delete a task/card-->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >Delete</button>
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
        .then(res => (this.cardsFiltered = this.cards = res.data))
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
        .then(res => (this.cardsFiltered = [...this.cardsFiltered, res.data]))
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
        .then(res => (this.cardsFiltered = this.cards = res.data))
        .catch(error => console.log(error));
    }
  },

  //Clears the done cards when user clicks "cLear done" button
  clearDone(status) {
    {
      if (card.status == "done")
        axios
          .delete("/api/todos/:status")
          .then(res => (this.cards = res.data))
          .catch(error => console.log(error));

      axios
        .get("/api/todos")
        .then(res => (this.cardsFiltered = this.cards = res.data))
        .catch(error => console.log(error));
    }
  },

  //Gets tasks from db
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
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");

.container{
  background-size: 100%;
  max-width: 80%;
}
.view{
 background-image: url('../public/beach.jpg');
 background-repeat:repeat; 
 background-size: cover; 
 background-position: center; 
 background-attachment: fixed;
}

h3 {
  text-align: center;
}
.clearDoneBtn {
  font-size: 14px;
  background-color: white;
  appearance: none;
  border: 1px solid black;
  border-radius: 0.25rem;
  margin: 10px 10px 10px 10px;
  margin-left: 60%;
}
.clearDoneBtn:hover {
  background: lightsalmon;
}
.clearDoneBtn:focus {
  outline: none;
}
.clearDone:active {
  background: lightsalmon;
}

.allBtn {
  margin: 10px 0px 4px 10px;
}

.personalFilter {
  margin: 10px 0px 20px 55px;
}

.teamFilter {
  margin: 10px 0px 20px 0px;
}
.viewFilters {
  font-size: 14px;
  background-color: white;
  appearance: none;
  border: 1px solid black;
  border-radius: 0.25rem;
}
.viewFilters:hover {
  background: lightskyblue;
}
.viewFilters:focus {
  outline: none;
}
.viewFilters:active {
  background: lightskyblue;
}
.card{
   padding: 0%;
   margin: 0px;
}
/*
.boards {
  border: 1.5pt solid darkorange;
  border-radius: 0.5rem;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
} */

/* .cardBtns {
  margin: 10px 20px 10px 10px;
} */
</style>

