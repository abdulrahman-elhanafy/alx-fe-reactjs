// src/components/TodoList.jsx
import React, { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: true },
    ]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;

        const newItem = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, newItem]);
        setNewTodo("");
    };

    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleToggle(todo.id)}
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            cursor: "pointer",
                        }}>
                        {todo.text}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(todo.id);
                            }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
