import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewTask from './pages/NewTask';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/new-task" component={<NewTask/>} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
