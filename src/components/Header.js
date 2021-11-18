import logoMarvel from '../assets/img/logoMarvelHD.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const Header = ({ setSearchValue }) => {
  const location = useLocation();

  const handleSearch = (event) => {
    if (location.pathname === '/comics') {
      setSearchValue(event.target.value);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="logo-site" src={logoMarvel} alt="logo-site-marvel" />
      </Link>

      <input type="text" onChange={handleSearch} />

      <div>
        <Link to="/">
          <button>Personnages</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <Link to="/favoris">
          <button>Favoris</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
