
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Vehicles from './vehicles';
import Home from './home';
import Processes from './processes';





function App() {
  return (
  <Router>
      <div className=''>
    <p className=''>Yo</p>
   
  </div>
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/vehicles"  element={<Vehicles />} />
    <Route path="/processes"  element={<Processes />} />
    </Routes>
  </Router>
  );
}

export default App;
