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
            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`);
            const respuesta = apiResponse.data;
            const apiPokemons = respuesta.results

            const allPokemons = [...pokemons, ...apiPokemons];

            return res.status(200).json(allPokemons);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener los pokemones' });
    }
};

module.exports = getPokemons;
