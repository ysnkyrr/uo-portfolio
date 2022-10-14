
import './App.css';
import './main.scss'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
    </div>
  );
}

export default App;
