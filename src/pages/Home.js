import { Link } from 'react-router-dom';

const Home = ({
  dataCharacters,
  isLoadingHome,
  setPageNumber,
  setFavCharacter,
  favCharacter,
}) => {
  // how many page to be displayed
  const pageTotal = Math.ceil(dataCharacters.count / 100);

  const tabPages = [];
  // iterate to create a tab with all pages to be add
  for (let i = 0; i < pageTotal; i++) {
    tabPages.push(i + 1);
  }

  // modify the call based on the page clicked
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  return isLoadingHome ? (
    <div>chargement en cours</div>
  ) : (
    <div className="container home-container">
      <div className="home">
        {dataCharacters.results.map((elem) => {
          return (
            <div className="character-link-up" key={elem._id}>
              <Link className="character-link" to={`/character/${elem._id}`}>
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
              <p
                onClick={() => {
                  const newFavCharTab = [...favCharacter];
                  newFavCharTab.push(JSON.stringify(elem));
                  setFavCharacter(newFavCharTab);
                }}
              >
                Add to favoris
              </p>
            </div>
          );
        })}
      </div>
      <div className="characters-pages">
        {tabPages.map((elem, index) => {
          return (
            <button
              className="page-box"
              onClick={() => {
                handlePageChange(elem);
              }}
              key={index}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
