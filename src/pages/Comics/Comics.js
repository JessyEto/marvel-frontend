import './comics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comics = ({
  dataToSearch,
  isLoading,
  setPageNumberComics,
  setFavComics,
  favComics,
}) => {
  // how many page to be displayed
  const pageTotal = Math.ceil(dataToSearch.count / 100);

  const tabPages = [];
  // iterate to create a tab with all pages to be add
  for (let i = 0; i < pageTotal; i++) {
    tabPages.push(i + 1);
  }

  // console.log(tabPages);

  // modify the call based on the page clicked
  const handlePageChange = (page) => {
    setPageNumberComics(page);
  };

  return isLoading ? (
    <div>Chargement en cours</div>
  ) : (
    <div className="container comics-container">
      <div className="comics">
        {dataToSearch.results.map((elem) => {
          return (
            <div key={elem._id}>
              <div>
                <img
                  className="comic-page-pic"
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                  alt="comic-page-pic"
                />
                <p className="comic-title">{elem.title}</p>
                <p className="comic-description">{elem.description}</p>
              </div>
              <p
                className="fav-comics-button"
                onClick={() => {
                  const newFavComicTab = [...favComics];
                  newFavComicTab.push(JSON.stringify(elem));
                  setFavComics(newFavComicTab);
                }}
              >
                <span>
                  <FontAwesomeIcon icon="heart" />
                </span>{' '}
                Add to favoris
              </p>
            </div>
          );
        })}
      </div>
      <div className="comics-pages">
        {tabPages.map((elem, index) => {
          // console.log(elem);
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

export default Comics;
