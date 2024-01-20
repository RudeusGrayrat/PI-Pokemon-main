import axios from 'axios';
import { useState } from 'react';

const Form = () => {
    const [userData, setUseData] = useState({
        name: '',
        image: '',
        vida: "",
        ataque: 0,
        defensa: 0,
        velocidad: '',
        altura: 0,
        peso: 0,
        types: [],
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setUseData(
            (data) => ({
                ...data,
                [name]: value
            })
        )
    }
    const handleType = (e) => {
        const { value } = e.target;
        setUseData((data) => ({
            ...data,
            types: [...data.types, value],
        }));
    };



    const createPokemon = async () => {
        const url = 'http://localhost:3001/pokemons'
        await axios.post(url, userData)
        setUseData({
            name: '',
            image: '',
            vida: '',
            ataque: 0,
            defensa: 0,
            velocidad: '',
            altura: 0,
            peso: 0,
            types: [],
        });
    }
    return (
        <div>
            <h2>FORM PAGE</h2>
            <form>
                <div>
                    <label htmlFor="types">Nombre:</label>
                    <input
                        type='name'
                        id='name'
                        name='name'
                        value={userData.name}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="types">Image:</label>
                    <input
                        type='imagen'
                        id='image'
                        name='image'
                        value={userData.image}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="types">Vida:</label>
                    <input
                        type='vida'
                        id='vida'
                        name='vida'
                        value={userData.vida}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="ataque">Ataque:</label>
                    <input type='number'
                        id='ataque'
                        name='ataque'
                        value={userData.ataque !== 0 ? userData.ataque : ''}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="types">Defensa:</label>
                    <input type='defensa'
                        id='defensa'
                        name='defensa'
                        value={userData.defensa !== 0 ? userData.ataque : ''}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="types">Velocidad:</label>
                    <input type='velocidad'
                        id='velocidad'
                        name='velocidad'
                        value={userData.velocidad}
                        onChange={handleChange} />
                </div>
                {userData.altura !== undefined && ( // Asegúrate de que 'altura' esté definida en el estado
                    <div>
                        <label htmlFor="altura">Altura:</label>
                        <input
                            type="text"
                            id="altura"
                            name="altura"
                            value={userData.altura !== 0 ? userData.ataque : ''}
                            onChange={handleChange}
                        />
                    </div>
                )}
                {userData.peso !== undefined && ( // Asegúrate de que 'peso' esté definida en el estado
                    <div>
                        <label htmlFor="peso">Peso:</label>
                        <input
                            type="text"
                            id="peso"
                            name="peso"
                            value={userData.peso !== 0 ? userData.ataque : ''}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="types">Tipos:</label>
                    <select multiple={true}
                        id="types"
                        name="types"
                        value={userData.types}
                        onChange={handleType}  >
                        <option value="normal">normal</option>
                        <option value="fighting">fighting</option>
                        <option value="flying">flying</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="rock">rock</option>
                        <option value="bug">bug</option>
                        <option value="ghost">ghost</option>
                        <option value="steel">steel</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value= "psychic">psychic</option>
                        <option value= "ice">ice</option>
                        <option value= "dragon">dragon</option>
                        <option value= "dark">dark</option>
                        <option value= "fairy">fairy</option>
                        <option value= "unknown">unknown</option>
                        <option value="grass">"shadow"</option>
                    </select>
                </div>
                <button type="submit" onClick={(e) => { e.preventDefault(); createPokemon() }}>Crear Pokémon</button>

            </form>


        </div >
    );
};

export default Form;
