import './styles.css';
import Navbar from './components/Navbar'
import Home from './routes/Home';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom';
import Contact from './routes/Contacts';
import Service from './routes/Services';
// import { Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        </Routes>

       
       
      
    </div>
  );
}

export default App;
