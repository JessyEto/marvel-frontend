import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import of page and components
import Home from './pages/Home';
import Header from './components/Header';
import Character from './pages/Character';
import Comics from './pages/Comics';
import Favoris from './pages/Favoris';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
};

export default App;
