import React, {useReducer} from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []); //dispatcher will take multiple functions with it.It takes information and sends it..
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo App With Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
