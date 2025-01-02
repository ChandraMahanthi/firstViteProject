import React, { useState } from 'react'
import './Todo.css';

function Todo() {
    let [task,setTask] = useState();
    let [number,setNumber] = useState(0);
    let [totalCompleted, setTotalCompleted] = useState(0)
    let [taskList,setTaskList] = useState([]);

    function addTask()
    {
        if(task=='')
        {
            alert('Enter some task')
        }
        else
        {
            setNumber(number+1)
            setTaskList([...taskList,task])
            console.log(taskList)
        }
    }

    function remove(index)
    {
        
        setTotalCompleted(totalCompleted+1);
        taskList.splice(index,1)
        setTaskList([...taskList]);

        
    }
    function AllDelete()
    {
        if(taskList.length>0)
        {
            setTotalCompleted(totalCompleted+number);
            setTaskList([])
        }
        else
        {
            alert(`no tasks`)
        }
    }
    function reset()
    {
        setTotalCompleted(0);
        setNumber(0)
    }
  return (
    <div className='todo'>Todo
        <p >Total Completed tasks : <strong>{totalCompleted}</strong> <button onClick={reset}>Reset</button></p>
        <input type="text" onChange={(event)=>{
            setTask(event.target.value);
        }}/>
        <button onClick={addTask}>Add Task</button>
        <table>
            <thead>
                <tr>
                    <td>S.no</td>
                    <td>Task</td>
                    <td><button onClick={AllDelete}>Mark all as Completed</button></td>
                </tr>
            </thead>
            <tbody>
                {taskList.map(function(element,index){
                    return <tr>
                        <td>{index+1}.</td>
                        <td>{element}</td>
                        <td><button onClick={remove}>Completed</button></td>
                    </tr>
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default Todo