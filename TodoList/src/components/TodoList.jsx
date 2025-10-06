import React,{useState}from "react";

function TodoList(){
    const[tasks,setTasks] = useState([]);
    const[newtask,setNewTask] = useState("");

    function addTask(){
        setTasks([...tasks,newtask]);
        setNewTask("");
    }
    function removeTask(index){
        setTasks(tasks.filter((_,idx)=> idx!==index));
    }
    function handleTasks(event){
        setNewTask(event.target.value);
    }
    return(
         <div className="to-do-list">
             <h1>To-do-List</h1>
             <div>
                <ul>
                    {
                        tasks.map((element,id)=>
                        <li key={id} onClick={()=>removeTask(id)}>{element}</li>
                        )
                    }
                </ul>
                <input type="text" placeholder="Enter a task" value={newtask} onChange={handleTasks}/>
                <button className="button" onClick={addTask}>Add Task</button>
             </div>
         </div>
    )
}
export default TodoList;