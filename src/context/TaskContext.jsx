import React, { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/Task'

export const TaskContext = createContext()

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    const createTask = (task) => {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider