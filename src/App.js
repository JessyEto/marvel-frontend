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
  const [dataToSearch, setDataToSearch] = useState({});
  const [dataCharacters, setDataCharacters] = useState({});

  const [searchValue, setSearchValue] = useState('');
  const [searchCharacter, setSearchCharacter] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHome, setIsLoadingHome] = useState(true);

  useEffect(() => {
    if (searchValue) {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-api-backend.herokuapp.com/comics?title=${searchValue}`
        );
        setDataToSearch(response.data);
        setIsLoading(false);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-api-backend.herokuapp.com/comics`
        );
        setDataToSearch(response.data);
        setIsLoading(false);
      };
      fetchData();
    }

    if (searchCharacter) {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-api-backend.herokuapp.com/characters?name=${searchCharacter}`
        );
        setDataCharacters(response.data);
        setIsLoadingHome(false);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-api-backend.herokuapp.com/characters`
        );
        setDataCharacters(response.data);
        setIsLoadingHome(false);
      };
      fetchData();
    }
  }, [searchValue, searchCharacter]);

  return (
    <Router>
      <Header
        setSearchValue={setSearchValue}
        setSearchCharacter={setSearchCharacter}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dataCharacters={dataCharacters}
              isLoadingHome={isLoadingHome}
            />
          }
        />
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
