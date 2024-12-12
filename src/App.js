
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Vehicles from './vehicles';
import Home from './home';
import Processes from './processes';
import IndividualProcess from './individualProcess';





function App() {
  return (
  <Router>
  
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/vehicles"  element={<Vehicles />} />
    <Route path="/processes"  element={<Processes />} />
    <Route path="/individualProcess"  element={<IndividualProcess />} />
    </Routes>
  </Router>
  );
}

export default App;
