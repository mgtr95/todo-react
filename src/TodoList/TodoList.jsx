import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList({ todos, onTodoChange }) {
    return (
        <ul className={styles.list}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onTodoChange={onTodoChange}
                />
            ))}
        </ul>
    );
}

export default TodoList;
