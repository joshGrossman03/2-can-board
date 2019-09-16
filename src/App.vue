<template>
  <div id="app">
    <Header />
    <div class="container">
    <AddTodo v-on:add-todo="addTodo" />
    <!--<Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />-->

   
    <div class="row">
      <!--Board 1 is the To Do list -->
      <Board class="col-md-3" id="ToDos">
        <Card v-for="(card,i) in cards" v-bind:key="i">
          <h5 class="card-title">{{cards[i].title}}</h5>
          <h6 class="card-title">Category: {{cards[i].category}}</h6>
          <p class="card-text">{{cards[i].description}}</p>
          <p class="card-text">Task #: {{cards[i].id}}</p>
         <p v-bind:data-id="cards[i].id"></p>
          <a v-bind:data-id="cards[i].id" v-on:click="deleteTodo(card.id)" href="#" class="btn btn-primary">Delete Me</a>
        </Card>
      </Board>
      <!--Board 2 is the In Progress-working list -->
      <Board class="col-md-3" id="inProgress">
        <Card v-for="(card, i) in cards" v-bind:key="i" id="card-2" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
      <!--Board 3 is the In Progress-waiting list -->
      <Board class="col-md-3" id="inProgressWaiting">
        <Card class="card" v-for="(card, i) in cards" v-bind:key="i" id="card-3" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
      <!--Board 4 is the Completed list -->
      <Board class="col-md-3" id="complted">
        <Card class="card" v-for="(card, i) in cards" v-bind:key="i" id="card-4" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
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
      cards:[],
      
      
    };
  },

  methods: {
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
      const { title, category,description,status} = createTodo;

      axios
        .post("/api/todos", {
          title,
          category,
          description,
          status:"todo"
          
        })
        .then(res => (this.cards = [...this.cards, res.data]))
        .catch(error => console.log(error));
    }
  
},
  created() {
    axios
      .get("/api/todos")
      .then(res => (this.cards = res.data))
      .catch(error => console.log(error));
  },
};
</script>

<style>

.container{
  background-image: url("https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?cs=srgb&dl=bay-beach-brazil-351283.jpg&fm=jpg");
  background-size: 100%;
}
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
</style>

