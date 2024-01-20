import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Card(props) {
  const { id, image, name, types, url } = props;
  const [imagenApi, setImagenApi] = useState('');
  const [type, setType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url) {
          const response = await axios(url);
          setImagenApi(response.data.sprites.front_default);
          setType(response.data.types);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  const tipo = type.map((ty) => ty.type.name);

  return (
    <div className={styles.card}>
      <img src={url ? imagenApi : image} alt="imagenbsd" className={styles.imagenCard} />
      <div className={styles.nombre}>
        <Link to={`/detail/${id}`} className={styles.namelink}>
          <h3>{name}</h3>
        </Link>
        <h3>{url ? tipo.join(', ') : types.join(', ')}</h3>
      </div>
    </div>
  );
}

export default Card;
