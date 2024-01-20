import React, { useState, useContext } from 'react';
import { TaskContext } from '../App';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';



const NewTask = () => {
    const { taskListData, setTaskListData } = useContext(TaskContext);

    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        deadline: '',
        priority: 'low',
        completed: false,
        createdAt: new Date().toISOString().slice(0, 10),
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const addTask = () => {
        setTaskListData((prevTaskList) => [...prevTaskList, newTask]);
        // You can also save the task data to a backend server here if needed.

        // Redirect back to the Home page after adding the task.
    };

    return (
        <div className="background">
            <h2>New Task</h2>
            <form>
                <label>Title:</label>
                <input type="text" name="title" value={newTask.title} onChange={handleInputChange} />

                <label>Description:</label>
                <textarea name="description" value={newTask.description} onChange={handleInputChange} />

                <label>Deadline:</label>
                <input type="date" name="deadline" value={newTask.deadline} onChange={handleInputChange} />

                <label>Priority:</label>
                <select name="priority" value={newTask.priority} onChange={handleInputChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type="button" onClick={addTask}>
                    Add Task
                </button>
            </form>
        </div>
    );

};

export default NewTask;
