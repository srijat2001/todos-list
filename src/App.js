//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState , useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo
  //check whether todo list is empty or not
  if(localStorage.getItem===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  //Ondelete function
  const onDelete = (todo) =>{
    console.log("Iam on Delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.removeItem(todo);
  }
  //Adding a Todo function
  const addtodo = (title,desc) =>{
    console.log("Iam adding this todo",title,desc);
    let id;
    if(todos.length===0){
      id=1;
    }
    else{
      id = todos[todos.length-1].id+1;
    }
    const myTodo ={
      id: id,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  //use state for updating todos
  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));},[todos])

  return (
    <div>
    <Router>
        <Header title="Todos List" searchBar={true}/>
          <Switch>
              <Route exact path="/" render={()=>{
                return(
                  <div>
                  <AddTodo addtodo={addtodo}/>
                  <Todos todos={todos} onDelete={onDelete}/>
                  </div>
                )
              }}>
              </Route>
          </Switch>
        <Footer/>
    </Router>
    </div>
  );
}
export default App;
