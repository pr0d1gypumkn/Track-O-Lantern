import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import './Home.css';
import '../fonts.css'
import { useLocation } from 'react-router-dom';

import base from '../assets/base_pumpkin.png';
import among_us from '../assets/among_us_pumpkin.png';
import cowgirl from '../assets/cowgirl_pumpkin.png';
import bunnyhat from '../assets/bunnyhat_pumpkin.png';
import sage from '../assets/sage_pumpkin.png';
import miku from '../assets/miku_pumpkin.png';
import female from '../assets/female_pumpkin.png';


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
    
    const location = useLocation();

    const navigate = useNavigate();
    const [theme, setTheme] = useState('base');
    const functionX = (newValue) => {
        setTheme(newValue);
    }
    const goToThemes = () => {
        navigate(`/themes`, {
             state: {theme: theme,
                        // setTheme: functionX,
                    }
         });
    }
    
    const newTask = () => {
        navigate(`/new-task`, {
            state: {}
        });
    }

    return (
        <div className='background'>
            <div className='pageContainer'>
                <div className="Home">
                    <h1 className="welcome">Welcome pr0d1gy!</h1>
                    <TaskList />

                    <div className="Themes" onClick={goToThemes}>
                        {theme === 'base' ?
                            <img src={base} alt="pumpkin" />
                            : theme === 'among_us' ?
                                <img src={among_us} alt="pumpkin" />
                                : theme === 'cowgirl' ?
                                    <img src={cowgirl} alt="pumpkin" />
                                    : theme === 'bunnyhat' ?
                                        <img src={bunnyhat} alt="pumpkin" />
                                        : theme === 'sage' ?
                                            <img src={sage} alt="pumpkin" />
                                            : theme === 'miku' ?
                                                <img src={miku} alt="pumpkin" />
                                                : <img src={female} alt="pumpkin" />
                        }






                        <h1>Themes</h1>
                    </div>
                </div>
                <CreateTask className="plant-seed"/>
            </div>



        </div>
    );
};

export default Home;
