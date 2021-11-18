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
  // State to store data received after server been called
  const [dataToSearch, setDataToSearch] = useState({});
  const [dataCharacters, setDataCharacters] = useState({});

  // State to track the inout value on search bar based on the page
  const [searchValue, setSearchValue] = useState('');
  const [searchCharacter, setSearchCharacter] = useState('');

  // State to check the fetch of data status
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHome, setIsLoadingHome] = useState(true);

  // Page states
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // search based on query for comics page
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

    // search based on query for character/home page
    if (searchCharacter || pageNumber >= 1) {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-api-backend.herokuapp.com/characters?limit=${100}&skip=${
            (pageNumber - 1) * 100
          }&name=${searchCharacter}`
        );
        setDataCharacters(response.data);
        setIsLoadingHome(false);
      };
      fetchData();
    }
    // else {
    //   const fetchData = async () => {
    //     const response = await axios.get(
    //       `https://marvel-api-backend.herokuapp.com/characters`
    //     );
    //     setDataCharacters(response.data);
    //     setIsLoadingHome(false);
    //   };
    //   fetchData();
    // }
  }, [searchValue, searchCharacter, pageNumber]);

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
              setPageNumber={setPageNumber}
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
