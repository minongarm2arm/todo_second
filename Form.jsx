import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "/redux/Reducer";
import uuid from "react-uuid";
import "./style.css";

let number = 2;

function Form({todos, setTodos}) { 
    const initialState = { 
        id: 0,
        title: "",
        body: "",
        isDone: false
    }; const [todo, setTodo] = useState(initialState);

    const dispatch = useDispatch();
    
    const onSubmitHandler = (event) => { 
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        setTodos([...todos, { ...todo, id: number }]);
        
        dispatch(
            addTodo({
              todo,
            })
          );
        
        setTodo(initialState);
        number++;
    };

    const onChangeHandler = (event) => { 
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value, id: uuid() });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="title" value={todos.title} onChange={onChangeHandler}>제목</input> 
            <input type="text" name="body" value={todos.body} onChange={onChangeHandler}>내용</input> 
            <button>추가</button>
        </form>
    );
};

export default Form; 