
import './App.css';
import './main.scss'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import Footer from './components/Footer';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Routes basename={"/myreactapp"}>
        <Route exact path={`/`} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
