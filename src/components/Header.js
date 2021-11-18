import logoMarvel from '../assets/img/logoMarvelHD.png';
const Header = () => {
  return (
    <div className="header">
      <img className="logo-site" src={logoMarvel} alt="logo-site-marvel" />
      <div>
        <button>Personnages</button>
        <button>Comics</button>
        <button>Favoris</button>
      </div>
    </div>
  );
};

export default Header;
