const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
    try {
        // Verificar si la base de datos tiene tipos
        const typesInDB = await Type.findAll();

        // Si la base de datos está vacía, obtener tipos de la API y guardarlos
        if (typesInDB.length === 0) {
            const apiResponse = await axios.get('https://pokeapi.co/api/v2/type');
            const apiTypes = apiResponse.data.results;

            // Guardar los tipos en la base de datos
            const savedTypes = await Type.bulkCreate(
                apiTypes.map((apiType) => {
                    return { name: apiType.name };
                })
            );

            res.status(200).json(savedTypes);
        } else {
            // Si la base de datos ya tiene tipos, devolverlos como respuesta
            res.status(200).json(typesInDB);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos de Pokémon' });
    }
};

module.exports = getTypes;
