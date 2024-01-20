import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewTask from './pages/NewTask';


export const TaskContext = createContext();

const App = () => {
  const [taskListData, setTaskListData] = useState([]);
    return (
        <Router>
          <TaskContext.Provider
                value={{taskListData, setTaskListData}}
              >
            <Routes>
              
                <Route path="/" element={<Home/>} />
                <Route path="/new-task" element={<NewTask/>} />
                {/* Add other routes as needed */}
              
            </Routes>
            </TaskContext.Provider>
        </Router>
    );
};

export default App;
