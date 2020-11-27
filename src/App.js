
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Rig from './components/Rig';
import Slider from './components/Slider';
import './styles.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Slider />
      <Products />
      <Rig />
      <About />
      <Contact />
      <Footer />
      <Copyright />

    </div>
  );
}

export default App;
