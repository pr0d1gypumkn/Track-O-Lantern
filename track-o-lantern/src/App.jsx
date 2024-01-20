import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewTask from './pages/NewTask';
import Themes from './pages/Themes';


export const TaskContext = createContext();
export const ThemeContext = createContext();

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
                <Route path='/themes' element={<Themes/>} />
                {/* Add other routes as needed */}
              
            </Routes>
            </TaskContext.Provider>
        </Router>
    );
};

export default App;
