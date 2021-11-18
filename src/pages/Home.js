import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

const Home = ({ dataCharacters, isLoadingHome }) => {
  // const [dataCharacters, setDataCharacters] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // retrieve data from backend
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://marvel-api-backend.herokuapp.com/characters'
  //       );
  //       // console.log(response.data);
  //       setDataCharacters(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return isLoadingHome ? (
    <div>chargement en cours</div>
  ) : (
    <div className="container home">
      {dataCharacters.results.map((elem) => {
        return (
          <Link
            className="character-link"
            to={`/character/${elem._id}`}
            key={elem._id}
          >
            <div>
              <img
                className="character-comic"
                src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                alt="character-comic"
              />
              <p className="character-name">{elem.name}</p>
              <p className="character-description">{elem.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
