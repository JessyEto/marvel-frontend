import { Link } from 'react-router-dom';

const Home = ({ dataCharacters, isLoadingHome, setPageNumber }) => {
  // how many page to be displayed
  const pageTotal = Math.ceil(dataCharacters.count / 100);

  const tabPages = [];
  // iterate to create a tab with all pages to be add
  for (let i = 0; i < pageTotal; i++) {
    tabPages.push(`Page ${i + 1}`);
  }
  const handlePageSearch = () => {
    setPageNumber(6);
  };

  return isLoadingHome ? (
    <div>chargement en cours</div>
  ) : (
    <div className="container home-container">
      <div className="home">
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
      <div className="characters-pages">
        {tabPages.map((elem, index) => {
          return (
            <button onClick={handlePageSearch} key={index}>
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
