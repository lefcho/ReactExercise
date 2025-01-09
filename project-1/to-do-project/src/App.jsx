import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    function persistData(newList) {
        localStorage.setItem("todos", JSON.stringify({ todos:newList }))
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((_, todoindex) => {
            return todoindex !== index;
        })
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleEditTodo(index) {
        const valueToBeedited = todos[index];
        setTodoValue(valueToBeedited);
        handleDeleteTodo(index);
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        } 
        let localTodos = localStorage.getItem("todos");

        if (!localTodos) {
            return;    
        }

        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos);
        
    }, [] )

    return (
        <>
            <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
            <ToDoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
        </>
    )
}

export default App;