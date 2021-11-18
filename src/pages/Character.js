import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Character = () => {
  const [data, setData] = useState({});

  const [isloading, setIsloading] = useState(true);

  // import of params from the router url
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-api-backend.herokuapp.com/comics/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [id]);

  return isloading ? (
    <div>chargement en cours</div>
  ) : (
    <div className="container character">
      <div className="character-view">
        <img
          className="character-single"
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt="character-view-single"
        />
        <p className="character-name">{data.name}</p>
        <p className="character-description">{data.description}</p>
      </div>
      <div className="character-carrousel">
        {data.comics.map((elem) => {
          return (
            <div key={elem._id}>
              <img
                className="comic-pic"
                src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                alt=""
              />
              <div>
                <p className="comic-char-title">{elem.title}</p>
                <p className="comic-char-description">{elem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
