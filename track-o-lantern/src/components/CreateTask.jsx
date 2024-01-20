import React from 'react'
import './CreateTask.css'
import { useNavigate} from 'react-router-dom'


const CreateTask = () => {
    const navigate = useNavigate();
    const addTask = () => {
        navigate('/new-task',
            {state: {title: '', description: '', deadline: '', priority: 'low', completed: false, createdAt: new Date().toISOString().slice(0, 10)}});
    }
    return (
        <button type="button" className="new-seed createTaskButton" onClick={addTask}>Plant New Seed</button>
    )
}

export default CreateTask