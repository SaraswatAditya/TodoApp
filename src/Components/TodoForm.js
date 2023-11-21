import React, {useContext, useState} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
        const [todoString, setTodoString] = useState("");
        const { dispatch } = useContext(TodoContext);

        const handleSubmit = e => {
            e.preventDefault();
            if (todoString===""){
                return alert("Please enter a todo");
            }

            const todo = {
                todoString,
                id: v4()
            };
            dispatch({
                type:ADD_TODO,
                payload: todo
            });

            setTodoString("");
        };


    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup >
                <InputGroup >
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                {/* <InputGroupAddon addonType="prepend"> */}
                {/* <div className="input-group-append" > */}
                    {/* <span className="input-group-text" id="basic-addon2"> */}
                    <Button
                    color="warning"
                    //TODO: onclick
                    >
                        Add
                    </Button>
                    {/* </span> */}
                {/* </div> */}
                {/* </InputGroupAddon> */}
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForm;