import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import { useLocation } from 'react-router-dom';
import './Themes.css';
import '../fonts.css'

import base from '../assets/base_pumpkin.png';
import among_us from '../assets/among_us_pumpkin.png';
import cowgirl from '../assets/cowgirl_pumpkin.png';
import bunnyhat from '../assets/bunnyhat_pumpkin.png';
import sage from '../assets/sage_pumpkin.png';
import miku from '../assets/miku_pumpkin.png';
import female from '../assets/female_pumpkin.png';





const Themes = () => {
    
    const location = useLocation();
    // const setTheme = location.state.setTheme;
    const theme = location.state.theme;
    if (location.state) {
        const theme = location.state.theme;
        // setTheme(location.state.theme);
    }
    const navigate = useNavigate();
    const goToHome = (theme) => {
        // setTheme(theme);
        navigate(`/`);

    }
    return (
        <div className='background'>
            <div className='pageContainer'>
                <div className="Home">
                    <h1 className="welcome">Welcome pr0d1gy!</h1>
                    <div className="avatars">
                        <div onClick={goToHome('base')}>
                            <img src={base} alt="" className="theme-image" onClick={goToHome('base')}/>
                        </div>
                        <div onClick={goToHome('among_us')}>
                            <img src={among_us} alt="" className="theme-image" onClick={goToHome('among_us')}/>
                        </div>
                        <div onClick={goToHome('cowgirl')}>
                            <img src={cowgirl} className="theme-image" alt="" onClick={goToHome('cowgirl')}/>
                        </div>
                        <div onClick={goToHome('bunnyhat')}>
                            <img src={bunnyhat} alt="" onClick={goToHome('bunnyhat')} className="theme-image"/>
                        </div>
                        <img src={sage} alt="" onClick={goToHome('sage')} className="theme-image"/>
                        <img src={miku} alt="" onClick={goToHome('miku')} className="theme-image"/>
                        <img src={female} alt="" onClick={goToHome('female')} className="theme-image"/>
                    </div>

                    <div className="Themes" onClick={goToHome}>
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






                        <h1>Home</h1>
                    </div>
                </div>
                <CreateTask />
            </div>



        </div>
    );
};

export default Themes;
