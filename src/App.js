import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Import of page and components
import Home from './pages/Home';
import Header from './components/Header';
import Character from './pages/Character';
import Comics from './pages/Comics';
import Favoris from './pages/Favoris';

const App = () => {
  // const navigate = useNavigate();
  const [dataToSearch, setDataToSearch] = useState({});
  const [searchValue, setSearchValue] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (searchValue) {
    }
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-api-backend.herokuapp.com/comics?title=${searchValue}`
      );
      setDataToSearch(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [searchValue]);

  return (
    <Router>
      <Header setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
        <Route
          path="/comics"
          element={<Comics dataToSearch={dataToSearch} isLoading={isLoading} />}
        />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
};

export default App;
