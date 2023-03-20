import Button from "react-bootstrap/Button";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, onTodoChange }) {

    function handleChange () {
        onTodoChange(todo.id);
    }

    function handleClick () {

    }

    return (
        <li className={styles.item}>
            <label className={todo.completed? styles.checked:styles.unchecked}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleChange}
                />
                <span className={styles.text}>{todo.text}</span>
            </label>
            <Button onClick={handleChange} type="button">✕</Button>
        </li>
    );
}
