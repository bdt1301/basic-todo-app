import styles from './TodoItem.module.scss';
import clsx from 'clsx';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className={styles['todo-item']}>
            <span
                className={clsx(styles['task'], {
                    [styles['done']]: todo.completed,
                })}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </span>
            <button className={styles['delete-btn']} onClick={() => deleteTodo(todo.id)}>
                X
            </button>
        </li>
    );
}

export default TodoItem;
