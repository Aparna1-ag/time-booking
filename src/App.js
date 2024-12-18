
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Vehicles from './vehicles';
import Home from './home';
import Processes from './adminProcesses';
import IndividualProcess from './individualProcess';
import Manage from './manage';
import Performance from './performance';
import EmployeeProcess from './employeeProcess';







function App() {
  return (
  <Router>
  
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/vehicles"  element={<Vehicles />} />
    <Route path="/adminprocesses"  element={<Processes />} />
    <Route path="/employeeprocess"  element={<EmployeeProcess />} />

    <Route path="/manage"  element={<Manage />} />
    <Route path="/performance"  element={<Performance />} />
    <Route path="/individualProcess"  element={<IndividualProcess />} />
    </Routes>
  </Router>
  );
}

export default App;
