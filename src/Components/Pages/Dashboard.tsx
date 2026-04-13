import { useState } from "react"
import type { Task } from "../Type/type"



export default function Dashboard() {

    const [task,setTask] = useState<Task[]>([])
    const [inputTask , setInputTask] = useState('')

    const addTask = () => {
        if(!inputTask) return ;

        setTask(prev=>{
            return [...prev,{id : Date.now(),task : inputTask,subtask:[]}]
        })
    }

  return (
    <div>
        <input type="text" id="task" name="task" value={inputTask} onChange={(e)=>setInputTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>

        <ul>
            {
                task.map((val)=>(
                    <li>
                        <span>{val.task}</span>
                        <button>Delete Task</button>
                        <button>Add Sub Task</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
