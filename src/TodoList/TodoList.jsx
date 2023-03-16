import TodoItem from "../TodoItem/TodoItem";

export default function TodoList(todos) {
    return <ul>
        {
            todos.map(todo=>{
                <TodoItem todo={todo}/>
            })
        }
    </ul>;
}
