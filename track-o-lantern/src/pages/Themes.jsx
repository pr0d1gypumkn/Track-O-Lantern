import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import './Home.css';
import '../fonts.css'

import base from '../assets/base_pumpkin.png';
import among_us from '../assets/among_us_pumpkin.png';
import cowgirl from '../assets/cowgirl_pumpkin.png';
import bunnyhat from '../assets/bunnyhat_pumpkin.png';
import sage from '../assets/sage_pumpkin.png';
import miku from '../assets/miku_pumpkin.png';
import female from '../assets/female_pumpkin.png';





const Themes = () => {
    

    const navigate = useNavigate();
    const goToThemes = () => {
        navigate(`/themes`, {
             state: {}
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
                <CreateTask />
            </div>



        </div>
    );
};

export default Themes;
