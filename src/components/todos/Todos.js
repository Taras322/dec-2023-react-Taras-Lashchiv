import React, {useEffect, useState} from 'react';
import {Todo} from "./todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos([...value]);
            });

    }, []);
    return (
        <div>
            {
                todos.map(value => <Todo value={value} key={value.id}/>)
            }
        </div>
    );
};

export default Todos;