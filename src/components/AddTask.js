import React, { useState } from "react"
import "./AddTask.css"

export const AddTask = ({tasks,setTasks}) => {
    const [taskValue ,setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value)
        setTaskValue(e.target.value)
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = {
            id:Math.floor(Math.random() * 10000),
            name: taskValue,
            completed:Boolean(progress)
        }
        setTasks([...tasks,task]);
        handleReset();
    }

    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task Name:</label>
                <input onChange={handleChange} 
                       type="text" 
                       name="task" 
                       id="task" 
                       placeholder="Please Enter Task name"
                       autoComplete="off"
                       value={taskValue}/>
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <span onClick={handleReset} className="reset">Reset</span>
                <button type="submit">AddTask</button>
            </form> 
            <p>{taskValue}</p>
        </section>
    )
}