const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getPokemonsById = async (req, res) => {
    const isUUID = (str) => {
        const uuidRegex =
          /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        return uuidRegex.test(str);
      };
    try {
        const { idPokemon } = req.params
        
        if (isUUID(idPokemon)) {
            const pokemon = await Pokemon.findOne({
                where: { id: idPokemon },
                include: [
                    {
                        model: Type,
                        attributes: ["name"],
                        through: {
                            attributes: [],
                        },
                    },
                ],
            })
            
            res.status(200).json(pokemon);
        }else{
            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const apiPokemon = apiResponse.data;
            if (apiResponse.status === 404) {
                return res.status(404).json({ error: 'No se encontró el Pokémon en la API' });
            }
            res.status(200).json(apiPokemon);
        }
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Error al obtener los pokemones' })
    }
}

module.exports = getPokemonsById