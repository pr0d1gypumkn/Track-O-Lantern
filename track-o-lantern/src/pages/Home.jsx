import React, { useState, createContext } from 'react';
import TaskList from '../components/TaskList';
import './Home.css';

export const TaskContext = createContext();

// should get it from CreateTask
const tempTaskListData = [
    {
        id: 1, // you can also use uuid
        title: "Laundry completed 2",
        description: "This is the description",
        deadline: "2024-01-18",
        priority: "medium",
        completed: true,
        createdAt: "2024-01-19"
    },
    {
        id: 2,
        title: "Laundry 2",
        description: "This is the description",
        deadline: "2024-01-24",
        priority: "medium",
        completed: false,
        createdAt: "2024-01-19"
    },
    {
        id: 3,
        title: "Laundry 1",
        description: "This is the descridf ldskjaf fdsjafl kdjsaf dljfsalj klfajsption",
        deadline: "2024-01-20",
        priority: "high",
        completed: false,
        createdAt: "2024-01-19"
    },
    {
        id: 4,
        title: "Laundry completed 1",
        description: "This is the description",
        deadline: "2024-01-24",
        priority: "high",
        completed: true,
        createdAt: "2024-01-20"
    },
]

const Home = () => {
    const [taskListData, setTaskListData] = useState(tempTaskListData);
    return (
        <div className="Home">
            <TaskContext.Provider 
                value={{taskListData, setTaskListData}}
            >
                <TaskList/>
            </TaskContext.Provider>
        </div>
    );
}

export default Home;
