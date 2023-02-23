import React from "react";
import TaskTile from "./TaskTile";
import updateTaskStatus from "../../services/apiClient/updateTaskStatus";

const TaskList = (props) => {
  const { tasks, setTasks } = props

  const handleToggle = async (taskId, completedStatus) => {
    const updatedCompletedStatus = !completedStatus
    await updateTaskStatus(taskId, updatedCompletedStatus)

    const updatedTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task, 
          completed: !task.completed
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }
  
  const taskTiles = tasks.map((task) => {
    return (
      <TaskTile 
        key={task.id} 
        task={task} 
        handleToggle={handleToggle} 
      />
    )
  })
    
  return (
    <div className="list">
      <h3 className="header list__header">TASKS</h3>
      {taskTiles}
    </div>
  )
}

export default TaskList