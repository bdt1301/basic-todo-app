import { useState } from 'react';

import styles from './TodoForm.module.scss';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form className={styles['todo-form']} onSubmit={handleSubmit}>
            <input
                required
                className={styles['input']}
                type="text"
                placeholder="Nhập công việc..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className={styles['add-btn']} type="submit">
                Thêm
            </button>
        </form>
    );
}

export default TodoForm;
