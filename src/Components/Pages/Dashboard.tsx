import { useState } from "react"
import type { Task } from "../Type/type"



export default function Dashboard() {

    const [task,setTask] = useState<Task[]>([])
    const [inputTask , setInputTask] = useState('')

    const addTask = () => {
        if(!inputTask) return ;

        setTask(prev=>{
            return [...prev,{id : Date.now(),task : inputTask,subtask:[],status:false}]
        })
    }

    const deleteTask = (id : number) => {
         setTask(prev=>{
            const newarr = prev.filter(val=>val.id !== id)
            return newarr
        })
    }

  return (
    <div>
        <input type="text" id="task" name="task" value={inputTask} onChange={(e)=>setInputTask(e.target.value)} />
        <button onClick={addTask}>Add Task➕</button>
        <select name="taskFilter" id="taskFiletr">
            <option value="">All Task</option>
            <option value="pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>

        <ul>
            {
                task.map((val)=>(
                    <li>
                        {val.status ? <p>✔️</p> : <p>⌛</p>}
                        <span>{val.task}</span>
                        <button onClick={()=>deleteTask(val.id)}>Delete🗑️</button>
                        <button>Add Sub Task</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
