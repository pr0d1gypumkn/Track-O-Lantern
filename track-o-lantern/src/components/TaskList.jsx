import React, { useEffect, useState, useRef, useContext } from 'react';
import "./TaskList.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TaskContext } from '../pages/Home';
import TaskCard from './TaskCard';

const TaskList = () => {
    const { taskListData } = useContext(TaskContext);
    const [taskListSorted, setTaskListSorted] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const customSort = (a, b) => {
        const compareCompleted = a.completed - b.completed;
    
        const priorityOrder = { "high": 0, "medium": 1, "low": 2 };
        const comparePriority = priorityOrder[a.priority] - priorityOrder[b.priority];
    
        const compareDeadline = new Date(a.deadline) - new Date(b.deadline);
    
        return compareCompleted || comparePriority || compareDeadline;
    
    };
    
    useEffect(() => {
        const sortTaskList = async() => {
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            await sleep(1000);
            if (taskListData) {
                const res = taskListData.sort(customSort);
                setTaskListSorted(res);
            }
        }
        sortTaskList();
        
    }, [taskListData]);

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaChevronRight size={35} />
          </div>
        );
    };
    
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
            <FaChevronLeft size={35}/>
            </div>
        );
    };

    const settings = {
        infinite: false,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setActiveIndex(next),
    };

    return (
        <div className="taskList">
            <Slider {...settings} ref={sliderRef}>
                {taskListSorted.map((task, idx, id) => (
                    <TaskCard
                        key={id}
                        idx={idx}
                        activeIndex={activeIndex}
                        task={task}
                    />
                ))}
                <div />
                <div />
            </Slider>
        </div>
    );
}

export default TaskList;

