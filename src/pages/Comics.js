const Comics = ({ dataToSearch, isLoading }) => {
  return isLoading ? (
    <div>Chargement en cours</div>
  ) : (
    <div className="container comics">
      {dataToSearch.results.map((elem) => {
        return (
          <div key={elem._id}>
            <img
              className="comic-page-pic"
              src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              alt="comic-page-pic"
            />
            <p className="comic-title">{elem.title}</p>
            <p className="comic-description">{elem.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
