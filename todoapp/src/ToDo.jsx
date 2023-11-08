import { useState } from "react";

const tasks = [
    {id:1, text:'zadanie 1'},
    {id:2, text:'zadanie 2'},
    {id:3, text:'zadanie 3'},
    {id:4, text:'zadanie 4'},
    {id:5, text:'zadanie 5'} 
]

const Todo = () => {
    const [todos, setTodos] = useState(tasks)

    const removeTaskHandler = (taskId) => {
        const newTasks = todos.filter((task) => task.id !== taskId)
        setTodos(newTasks)
    }
    return(
        <>
        <h1>jestem z komponentow Todo</h1>
        <ul>
            {
                tasks.map(task => (
                    <li style={ {color:"#8a8a8a", fontSize:"19px", marginBottom:"10px"}}key={task.id}>
                        <span> {task.text} </span>
                        <button onClick={()=>removeTaskHandler(task.id)}>Usuń zadanie</button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}
export default Todo