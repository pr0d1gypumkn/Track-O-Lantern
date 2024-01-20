import React, { useState, createContext } from 'react';
import TaskList from '../components/TaskList';
import './Home.css';
import '../fonts.css'

export const TaskContext = createContext();

const themes = {
    'base': '../../public/assets/base_pumpkin.png',
    'among_us': '../../public/assets/among_us_pumpkin.png',
    'cowgirl': '../../public/assets/cowgirl_pumpkin.png',
    'bunnyhat': '../../public/assets/bunnyhat_pumpkin.png',
    'female': '../../public/assets/female_pumpkin.png',
    'sage': '../../public/assets/sage_pumpkin.png',
    'miku': '../../public/assets/miku_pumpkin.png',
}
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
    const [theme, setTheme] = useState('base');
    return (
        <div className="Home">
            <h1 className="welcome">Welcome pr0d1gy!</h1>
            <TaskContext.Provider 
                value={{taskListData, setTaskListData}}
            >
                <TaskList/>
            </TaskContext.Provider>
            <div className="Themes">

                <img src={themes[theme]} alt="pumpkin" />

                
                <h1>Themes</h1>
            </div>
        </div>
    );
}

export default Home;
