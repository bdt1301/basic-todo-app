import { useEffect, useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter';
import styles from './App.module.scss';

function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'incomplete') return !todo.completed;
        return true; // 'all'
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    });

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        const newTodos = todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <Filter currentFilter={filter} onFilterChange={setFilter} />
            <ul className={styles["todo-list"]}>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
                })}
            </ul>
        </div>
    );
}

export default App;
