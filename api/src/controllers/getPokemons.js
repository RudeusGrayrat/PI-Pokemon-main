const { Op } = require('sequelize');
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemons = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const localPokemons = await Pokemon.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },
                include: [{
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }],
            });

            if (localPokemons.length === 0) {
                const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const apiPokemon = apiResponse.data;
    
                // Combinar y ordenar los resultados de la base de datos local y la API
                const allPokemons = [...localPokemons, apiPokemon];
                return res.status(200).json(allPokemons);
            }
            return res.status(200).json(localPokemons);


        } else {
            const pokemons = await Pokemon.findAll({
                include: {
                    model: Type,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                },
            });
            // Hacer una solicitud a la API para obtener más Pokémon si es necesario
            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
            const apiPokemons = apiResponse.data.results;

            // Combinar y ordenar los resultados de la base de datos local y la API
            const allPokemons = [...pokemons, ...apiPokemons];

            return res.status(200).json(allPokemons);
        }

        // Si no se encuentran pokemones
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener los pokemones' });
    }
};

module.exports = getPokemons;
