import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css"

export default function TodoList({ todos, onTodoChange }) {
    return (
        <ul className={styles.list}>
            {todos.map(todo => (
                <TodoItem  key={todo.id} todo={todo} onTodoChange={onTodoChange}/>
            ))}
        </ul>
    );
}