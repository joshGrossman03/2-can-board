<template>
  <div id="app">
    <Header />
    <div class="view">
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
          <div class="col-sm-5 col-md-5 col-lg-5">
            <button
              class="viewFilters personalFilter"
              :class="{active: filter = 'personal'}"
              @click="runFilter('personal')"
            >View Personal Tasks</button>
            <!--  </div> -->

            <!-- <div class="col-sm-4 col-md-4 col-lg-4"> -->
            <button
              class="viewFilters teamFilter"
              :class="{active: filter = 'team'}"
              @click="runFilter('team')"
            >View Team Tasks</button>
          </div>

          <!-- Button to clear "Done" items -->
          <div class="col-sm-7 col-md-7 col-lg-7">
            <button class="clearDoneBtn" @click="clearDone('done')">
              Clear Done Tasks
              <i class="material-icons">delete_sweep</i>
            </button>
          </div>
        </div>

        <!-- start task board section -->
        <div class="row">
          <!--Board 1 is the To Do list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="ToDos">
            <p class="boardHeader">To Do</p>
            <Card v-for="(card,i) in cardsFiltered" v-bind:key="i" v-show="card.status =='todo'">
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>

              <!-- Button that will delete a task/card to next status -->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >
                <i class="material-icons">delete</i>
              </button>

              <!-- Button that advances card to next status -->
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm cardBtn"
              >
                <i class="material-icons">navigate_next</i>
              </button>
            </Card>
          </Board>
          <!--Board 2 is the In Progress-working list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="inProgress">
            <p class="boardHeader">In Progress</p>
            <Card
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='inProgress'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>

              <!-- Button that will delete a task/card -->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >
                <i class="material-icons">delete</i>
              </button>
              <!-- Button that advances card to next status -->
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm cardBtn"
              >
                <i class="material-icons">navigate_next</i>
              </button>
            </Card>
          </Board>
          <!--Board 3 is the In Progress-waiting list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="inProgressWaiting">
            <p class="boardHeader">In Progress - Waiting</p>
            <Card
              v-for="(card,i) in cardsFiltered"
              v-bind:key="i"
              v-show="card.status =='inProgressWaiting'"
            >
              <h5 class="card-title">{{card.title}}</h5>
              <h6 class="card-title">Category: {{card.category}}</h6>
              <p class="card-text">{{card.description}}</p>
              <p v-bind:data-id="card.id"></p>

              <!-- Button that will delete a task/card -->
              <button
                v-bind:data-id="card.id"
                v-on:click="deleteTodo(card.id)"
                href="#"
                class="btn btn-primary btn-sm"
              >
                <i class="material-icons">delete</i>
              </button>
              <!-- Button that will move a task/card to next status -->
              <button
                v-on:click="updateTodo(card.id,card.title, card.category, card.description,card.status)"
                type="button"
                class="btn btn-secondary btn-sm cardBtn"
              >
                <i class="material-icons">navigate_next</i>
              </button>
            </Card>
          </Board>
          <!--Board 4 is the Completed list -->
          <Board class="col-sm-12 col-md-3 col-lg-3 boards" id="completed">
            <p class="boardHeader">Done!</p>
            <Card v-for="(card,i) in cardsFiltered" v-bind:key="i" v-show="card.status =='done'">
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
              >
                <i class="material-icons">delete</i>
              </button>
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

  methods:
    //Creates the category filters of Personal, Team and All
    {
      runFilter(filter) {
        if (filter == "all") {
          this.cardsFiltered = this.cards;
        } else if (filter == "personal") {
          this.cardsFiltered = this.cards.filter(
            card => card.category == "Personal"
          );
        } else if (filter == "team") {
          this.cardsFiltered = this.cards.filter(
            card => card.category == "Team"
          );
        }
      },

      //Deletes a single to do item when the Delete button is clicked
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

      //add a new to do button by clicking add to do button
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

      //Update the status of a to do item by clicking the "move forward" button, status will update to the next status and move to the corresponding 'board'
      updateTodo(id, title, category, description, status) {
        if (status === "todo") {
          status = "inProgress";
        } else if (status === "inProgress") {
          status = "inProgressWaiting";
        } else if (status === "inProgressWaiting") {
          status = "done";
        }
        //for troubleshooting  console.log(id, title, category, description, status);
        axios
          .put("/api/todos", {
            id,
            title,
            category,
            description,
            status
          })
          .then(res => (this.cardsFiltered = [...this.cardsFiltered, res.data]))
          .catch(error => console.log(error));

        axios
          .get("/api/todos")
          .then(res => (this.cardsFiltered = this.cards = res.data))
          .catch(error => console.log(error));
      },

      //Clears the done cards from the board and deletes from db, when user clicks "CLear done tasks" button
      clearDone(status) {
        {
          let cardsDone = this.cards.filter(card => card.status == "done");
          axios
            .delete("/api/todos", { data: cardsDone })
            .then(res => (this.cards = res.data))
            .catch(error => console.log(error));
          axios
            .get("/api/todos")
            .then(res => (this.cardsFiltered = this.cards = res.data))
            .catch(error => console.log(error));
        }
      }
    },
  //Gets tasks from db, render on page
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

.container {
  background-size: 100%;
  max-width: 80%;
}
.view {
  background-image: url("../public/beach.jpg");
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.clearDoneBtn {
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.65);
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
  font-size: 16pt;
  font-weight: less bold;
}

.personalFilter {
  margin: 10px 6px 20px 10px;
  font-size: 14px;
}

.teamFilter {
  margin: 10px 0px 20px 0px;
  font-size: 14px;
}
.viewFilters {
  background-color: rgba(255, 255, 255, 0.65);
  appearance: none;
  border: 1px solid black;
  border-radius: 0.25rem;
}
.viewFilters:hover {
  background: lightsalmon;
}
.viewFilters:focus {
  outline: none;
}
.viewFilters:active {
  background: lightsalmon;
}
.card {
  padding: 0%;
  margin: 0px;
}

.boardHeader {
  font-size: 24pt;
  color: white;
  background-color: rgba(243, 157, 18, 0.512);
  text-align: center;
}

.cardBtn {
  margin-left: 3%;
}

.material-icons {
  vertical-align: middle !important;
  padding-bottom: 3px;
}

button:hover {
  background: #ffc000;
}

.btn-primary {
  background: rgba(0, 0, 0, 0.75);
}

.btn-primary:hover {
  background: #323232;
}

.btn-secondary {
  background: #ff8c00;
}

.btn-secondary:hover {
  background: #ffc000;
}
</style>

