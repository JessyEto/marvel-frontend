const Favoris = ({ favCharacter }) => {
  // console.log(favCharacter);
  return (
    <div className="container favoris">
      {favCharacter.map((favElem, index) => {
        return (
          <div key={index}>
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
    </div>
  );
};

export default Favoris;

// {JSON.parse(favElem).name}
