<template>
  <div id="app">
    <Header />
    <div class="container">
    <AddTodo v-on:add-todo="addTodo" />
    <!--<Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />-->

   
    <div class="row">
      <!--Board 1 is the To Do list -->
      <Board class="col-md-3" id="board-1">
        <Card v-for="(card, i) in cards" v-bind:key="i" id="card-1" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
      <!--Board 2 is the In Progress-working list -->
      <Board class="col-md-3" id="board-2">
        <Card v-for="(card, i) in cards" v-bind:key="i" id="card-2" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
      <!--Board 3 is the In Progress-waiting list -->
      <Board class="col-md-3" id="board-3">
        <Card class="card" v-for="(card, i) in cards" v-bind:key="i" id="card-3" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
      <!--Board 4 is the Completed list -->
      <Board class="col-md-3" id="board-4">
        <Card class="card" v-for="(card, i) in cards" v-bind:key="i" id="card-4" draggable="true">
          <p>{{cards[i].cardname}}<br>{{cards[i].cardTitle}}<br>{{cards[i].owner}}<br>{{cards[i].category}}</p>
        </Card>
      </Board>
    </div>
  </div>
  
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from "./components/Layouts/Header";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import Board from "./components/Board";
import Card from "./components/Card";

export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo,
    Board,
    Card
  },
  data() {
    return {
      todos: [],
      cards:[
            {cardname: 'cardOne', cardTitle:'Fix Bugs', owner:'Josh',category:'Team'},
            {cardname: 'cardTwo',cardTitle:'Test', owner:'Kadonna',category:'Team'},
            {cardname: 'cardThree',cardTitle:'Fix Bugs', owner:'Lorena',category:'Team'},
            {cardname: 'cardFour',cardTitle:'Fix Bugs', owner:'Rafael',category:'Team'}

            ]
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/${id}")
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(error => console.log(error));
      //this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(createTodo) {
      const { title, completed } = createTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(error => console.log(error));
      //this.todos = [...this.todos, createTodo];
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todos = res.data))
      .catch(error => console.log(error));
  }
};
</script>

<style>
/** {

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn:hover {
  background: #666;
}
.flexbox {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1800px;
  height: 100vh;

  overflow: hidden;

  margin: 3px auto;
  padding: 15px;

  border: 10px solid gray;
  border-radius: 10px;

}

.flexbox .board {
  display:flex;
  flex-direction: column;
  width: 100%;
  height:100vh;
  max-width: 500px;
  /* background: #313131; 

  padding: 15px;  
  border: 2px solid whitesmoke;
  border-radius: 10px;
}

.flexbox .board .card {
  padding: 15px 25px;
  background-color: #fff;

  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 10px;
}
.flexbox {
  background-image: url("https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?cs=srgb&dl=bay-beach-brazil-351283.jpg&fm=jpg");
  background-size: 100%;
}

/*.card{
  width:100%;
  height:15vh;
}*/
.container{
  background-image: url("https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?cs=srgb&dl=bay-beach-brazil-351283.jpg&fm=jpg");
  background-size: 100%;
}
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
</style>

