import React, { useContext, useState, useEffect } from "react";

import { TaskContext } from "../App";
import { Checkbox } from "@mui/material";
import Notifications from "./Notification";

const TaskCard = (props) => {
  const [showNotification, setShowNotification] = useState(false);
  const { taskListData, setTaskListData } = useContext(TaskContext);
  const { idx, activeIndex, task } = props;
  const handleCompleteClick = (index) => {
    const updatedItems = [...taskListData];
    updatedItems[index].completed = !updatedItems[index].completed;
    setTaskListData(updatedItems);

    if (updatedItems[index].completed) {
      setShowNotification(true);
    }
  };
  const priorityToBorderColor = {
    high: "#f05c44",
    medium: "#fb9a05",
    low: "#96ad8a",
  };
  const borderColor = task.completed
    ? "#dddddd"
    : priorityToBorderColor[task.priority];

  useEffect(() => {
    console.log(showNotification);
  }, [showNotification]);

  return (
    <div
      className={idx === activeIndex ? "slide activeSlide" : "slide"}
      key={idx}
      style={{ borderColor: borderColor }}
    >
      <div className="cardContainer">
        <div className="cardTitle">{task.title}</div>
        <div className="cardDetails">
          <div>{task.description}</div>
          <div>deadline: {task.deadline}</div>
          <div>priority: {task.priority}</div>
        </div>
        <div className="cardComplete">
          completed:
          <Checkbox
            color="success"
            checked={task.completed}
            disabled={idx !== activeIndex}
            onClick={() => handleCompleteClick(idx)}
          />
          <Notifications
            visible={showNotification}
            setVisible={setShowNotification}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
