import '../Header/header.css';
import logoMarvel from '../../assets/img/logoMarvelHD.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ setSearchValue, setSearchCharacter }) => {
  const location = useLocation();

  const handleSearch = (event) => {
    if (location.pathname === '/comics') {
      setSearchValue(event.target.value);
    }

    if (location.pathname === '/') {
      setSearchCharacter(event.target.value);
    }
  };

  return (
    <div className="header">
      <div className="hear-content">
        <Link to="/">
          <img className="logo-site" src={logoMarvel} alt="logo-site-marvel" />
        </Link>
        <div>
          <span className="search-icone">
            <FontAwesomeIcon icon="search" />
          </span>
          <input
            className="input-header-search"
            type="text"
            placeholder="Find your character or comic"
            onChange={handleSearch}
          />
        </div>

        <div>
          <Link to="/">
            <button className="header-character">Personnages</button>
          </Link>
          <Link to="/comics">
            <button className="header-comics">Comics</button>
          </Link>
          <Link to="/favoris">
            <button className="header-favoris">Favoris</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
