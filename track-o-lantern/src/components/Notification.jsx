import React, { useState, useEffect } from "react";
import "./TaskList.css";

const Notifications = ({ visible, setVisible }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visible, setVisible]);

  if (!visible) return null;

  return <div className="successNotification"> Task completed!</div>;
};

export default Notifications;
