
import './App.css';
import './main.scss'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
