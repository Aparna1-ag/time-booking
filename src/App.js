
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Vehicles from './vehicles';
import Home from './home';
import Processes from './adminProcesses';
import IndividualProcess from './individualProcess';
import Manage from './manageforAdmin';
import Performance from './performance';
import EmployeeProcess from './employeeProcess';
import ManageforEmployee from './manageforEmployee';
import Vendor from './vendor';
import NewVehicles from './allVehicles';







function App() {
  return (
  <Router>
  
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/vehicles"  element={<Vehicles />} />
    <Route path="/adminprocesses"  element={<Processes />} />
    <Route path="/employeeprocess"  element={<EmployeeProcess />} />
    <Route path="/newvehicle"  element={<NewVehicles />} />


    <Route path="/manage"  element={<Manage />} />
    
    <Route path="/vendors"  element={<Vendor />} />
    <Route path="/manageforemployee"  element={<ManageforEmployee />} />
    <Route path="/performance"  element={<Performance />} />
    <Route path="/individualProcess"  element={<IndividualProcess />} />
    </Routes>
  </Router>
  );
}

export default App;
