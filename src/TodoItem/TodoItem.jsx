import Button from "react-bootstrap/Button";
import { TodoType } from "../utilities/constants";
import styles from "./TodoItem.module.css";

function TodoItem({ todo, onTodoChange }) {
    function handleChange() {
        onTodoChange(todo.id, TodoType.TOGGLE_COMPLETED);
    }

    function handleClick() {
        onTodoChange(todo.id, TodoType.DELETE);
    }

    return (
        <li className={styles.item}>
            <label className={todo.completed ? styles.checked : undefined}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleChange}
                />
                <span className={styles.text}>{todo.text}</span>
            </label>
            <Button type="button" onClick={handleClick}>
                &#10005;
            </Button>
        </li>
    );
}

export default TodoItem;
