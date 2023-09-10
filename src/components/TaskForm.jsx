import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { createTask } = useContext(TaskContext)

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        })

        setTitle('')
        setDescription('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form
                className='bg-slate-800 p-10 mb-4'
                onSubmit={handleSubmit}
            >
                <h1
                    className='text-2xl font-bold text-white mb-3'
                >
                    Crea tu tarea
                </h1>
                <input
                    className='bg-slate-300 p-3 w-full mb-2'
                    onChange={handleInput}
                    type="text"
                    placeholder='Escribe una tarea'
                    value={title}
                    autoFocus
                />

                <textarea
                    className='bg-slate-300 p-3 w-full mb-2'
                    onChange={handleDescription}
                    placeholder='Descripcion de tarea'
                    value={description}
                />
                <button
                    className='bg-indigo-500 px-3 py-1 text-white'
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm