import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
      
          <Route exact path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
