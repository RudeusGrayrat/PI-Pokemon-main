const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
    try {
        const typesInDB = await Type.findAll();

        if (typesInDB.length === 0) {
            const apiResponse = await axios.get('https://pokeapi.co/api/v2/type');
            const apiTypes = apiResponse.data.results;

            const savedTypes = await Type.bulkCreate(
                apiTypes.map((apiType) => {
                    return { name: apiType.name };
                })
            );

            res.status(200).json(savedTypes);
        } else {
            res.status(200).json(typesInDB);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos de Pokémon' });
    }
};

module.exports = getTypes;
