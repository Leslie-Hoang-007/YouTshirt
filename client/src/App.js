import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';
import { useState } from 'react';

function App() {

  // Lifted State: Shared between Navbar and Pages
  const [isModalUp, setIsModalUp] = useState(false);

  return (
    <div className="App">

      <Router>
        <Navbar isModalUp={isModalUp} setIsModalUp={setIsModalUp}/>
        <Routes>
          <Route path="/" element={<Home isModalUp={isModalUp} setIsModalUp={setIsModalUp}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
