import React, { useContext } from 'react';
import { TaskContext } from '../App';

const TaskCard = (props) => {
    const { taskListData, setTaskListData } = useContext(TaskContext);
    const {idx, activeIndex, task} = props;
    const handleCompleteClick = (index) => {
        const updatedItems = [...taskListData];
        updatedItems[index].completed = !updatedItems[index].completed;
        setTaskListData(updatedItems);  
    };
    const priorityToBorderColor = {
        "high": "#f05c44",
        "medium": "#fb9a05",
        "low": "#96ad8a"
    };
    const borderColor = task.completed ? "#dddddd" : priorityToBorderColor[task.priority];

    return (
        <div className={idx === activeIndex ? "slide activeSlide" : "slide"} key={idx} style={{borderColor: borderColor}}>
            <div className="cardContainer">
            <div className="cardTitle">
                {task.title}
            </div>
            <div className="cardDetails">
                <div>{task.description}</div>
                <div>deadline: {task.deadline}</div>
                <div>priority: {task.priority}</div>
            </div>
            <div className="cardComplete">
                completed: 
                <input
                    type="checkbox"
                    checked={task.completed}
                    disabled={idx !== activeIndex}
                    onClick={() => handleCompleteClick(idx)}
                />
            </div>
            </div>
        </div>
    );
};

export default TaskCard;