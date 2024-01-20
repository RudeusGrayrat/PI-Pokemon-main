import Card from '../Card/Card';
import styles from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../redux/actions';
import { useEffect } from 'react';

function Cards(props) {
    const characters = useSelector((state)=> state.allPokemons)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPokemons())
    }, [])

    console.log(characters);

    return (
        <div className={styles.home}>
            <div>
                <button className={styles.button}>Filtrar por Tipo</button>
                <button className={styles.button}>Filtrar por Origen</button>
                <button className={styles.button}>Filtrar por Ordenar</button>
            </div>
            <div className={styles.cards}>

                {(characters?.map((char) => {
                    if (char.sprites) {
                        return (
                            <Card
                                key={char.id}
                                id={char.id}
                                image={char.sprites.front_default}
                                name={char.name}
                                types={char.types?.map((ty) => ty.type.name)}
                            />
                        )

                    } else if (char.id) {
                        return (
                            <Card
                                key={char.id}
                                id={char.id}
                                image={char.image}
                                name={char.name}
                                types={char.Types?.map((ty) => ty.name)}
                            />
                        );
                    } else if (char.url) {
                        // Estructura del segundo tipo (personaje de la API)
                        const idapi = Number(char.url.split("/").slice(-2, -1)[0]);
                        return (
                            <Card
                                key={idapi}
                                id={idapi}
                                name={char.name}
                                url={char.url}
                            />
                        );
                    } else {
                        console.warn('Data is missing or incomplete for character:', char);
                        return null;
                    }
                }))}
            </div>
        </div>
    );
}



export default Cards;


