import './App.css';
 import Login from './Login/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Signup/Signup';
import India from './Teams/India';
import Footer from './Footer/Footer';



function App() {
  return (
    <>
    <div className="App container">
      
     
  <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/India" element={<India />} />
      </Routes>
      
      
    </div>
     <Footer/>
     </>
  );
}

export default App;
