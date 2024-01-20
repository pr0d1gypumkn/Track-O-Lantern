import React, { useState, useContext } from 'react';
import { TaskContext } from '../App';
import { useNavigate } from 'react-router-dom';
import "./NewTask.css"
import { TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const NewTask = () => {
    const { setTaskListData } = useContext(TaskContext);

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

    const navigate = useNavigate()
    const addTask = () => {
        setTaskListData((prevTaskList) => [...prevTaskList, newTask]);

        navigate('/');
    };

    return (
        <div className="newTask">
            <h1>New Task</h1>
            <form>
                <div className="newTaskFormContainer">
                    <div className="newTaskForm">
                        <TextField 
                            required
                            id="newTitle"
                            name="title"
                            label="Title"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={newTask.title}
                            sx={{marginBottom: "20px"}}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="newDescription"
                            name="description"
                            label="Description"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleInputChange}
                            sx={{marginBottom: "20px"}}
                            value={newTask.description}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                id="newDeadline"
                                name="deadline"
                                label="Deadline"
                                value={newTask.deadline}
                                slotProps={{
                                    textField: {
                                    error: false,
                                },}}
                                sx={{marginBottom: "20px"}}
                                onChange={date => handleInputChange({ target: { value:date.toString(), name: "deadline" }})}
                            />
                        </LocalizationProvider>
                        <InputLabel id="priorityLabel" sx={{fontSize: "0.8rem", marginLeft: "8px"}}>Priority</InputLabel>
                        <Select
                            required
                            labelId="priorityLabel"
                            id="newPriority"
                            value={newTask.priority}
                            name="priority"
                            onChange={handleInputChange}
                        >
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </div>

                    <button type="button" className="newSeed addTaskButton createTaskButton" onClick={addTask}>
                        Add New Task 
                    </button>
                    {/* <div className="addTaskText">Add New Task</div> */}
                </div>
            </form>
        </div>
    );

};

export default NewTask;
