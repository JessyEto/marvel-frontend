const Favoris = ({ favCharacter, favComics }) => {
  // console.log(favCharacter);
  return (
    <div className="container favoris">
      {favCharacter.map((favElem, index) => {
        return (
          <div className="fav-character" key={index}>
            <img
              className="favoris-pic"
              src={`${JSON.parse(favElem).thumbnail.path}.${
                JSON.parse(favElem).thumbnail.extension
              }`}
              alt="character-comic"
            />
            <p className="fav-name">{JSON.parse(favElem).name}</p>
            <p className="fav-description">{JSON.parse(favElem).description}</p>
          </div>
        );
      })}
      {favComics.map((favElem, index) => {
        return (
          <div className="fav-comic" key={index}>
            <img
              className="fav-comic-page-pic"
              src={`${JSON.parse(favElem).thumbnail.path}.${
                JSON.parse(favElem).thumbnail.extension
              }`}
              alt="comic-page-pic"
            />
            <p className="fav-comic-title">{JSON.parse(favElem).title}</p>
            <p className="fav-comic-description">
              {JSON.parse(favElem).description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Favoris;

// {JSON.parse(favElem).name}
