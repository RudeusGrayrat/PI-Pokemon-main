import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../../redux/actions'; // Asegúrate de tener este archivo
import styles from './Detail.module.css';
import style from '../Card/Card.module.css';

function Detail(props) {
   const { id } = useParams();

   const character = useSelector((state) => state.pokemonDetails)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchCharacter(id))
   }, [id])

   console.log(character);
   const types = character?.types?.map((ty) => ty.type);
   const tipos = types?.map((ti) => ti.name)
   const Types = character?.Types?.map((typ)=> typ.name)

   return (
      <div className={styles.detail}>
         {character ? (
            <>
               <div className={styles.info}>
                  <h1>{character.name}</h1>
                  <h3>{Types?.join(", ")|| tipos?.join(", ")}</h3>
               </div>
               <div className={styles.ima}>
                  <img src={character.image || character.sprites?.front_default} alt={character.image || character.name} className={style.imagenCard} />
               </div>
            </>
         ) : (
            <p>Cargando...</p>
         )}
      </div>
   );
}

export default Detail;