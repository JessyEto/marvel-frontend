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
  const [pageNumberComics, setPageNumberComics] = useState(1);

  // state for Character Favoris
  const [favCharacter, setFavCharacter] = useState(
    JSON.parse(localStorage.getItem('myCharacter')) || []
  );

  // Use effect for Character fav
  useEffect(() => {
    localStorage.setItem('myCharacter', JSON.stringify(favCharacter));
  }, [favCharacter]);

  useEffect(() => {
    // search based on query for comics page
    if (searchValue || pageNumberComics >= 1) {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-api-backend.herokuapp.com/comics?limit=${100}&skip=${
            (pageNumberComics - 1) * 100
          }&title=${searchValue}`
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
  }, [searchValue, searchCharacter, pageNumber, pageNumberComics]);

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
              setFavCharacter={setFavCharacter}
              favCharacter={favCharacter}
            />
          }
        />
        <Route path="/character/:id" element={<Character />} />
        <Route
          path="/comics"
          element={
            <Comics
              dataToSearch={dataToSearch}
              isLoading={isLoading}
              setPageNumberComics={setPageNumberComics}
            />
          }
        />
        <Route
          path="/favoris"
          element={<Favoris favCharacter={favCharacter} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
