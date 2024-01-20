const { Pokemon, Type } = require('../db');

const postPokemons = async (req, res) => {
    const {
        name,
        image,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        types
    } = req.body;

    const ataqueNum = parseInt(ataque);
    const defensaNum = parseInt(defensa);
    try {

        // Verificar si la conversión fue exitosa y no es NaN
        const ataque = isNaN(ataqueNum) ? 0 : ataqueNum;
        const defensa = isNaN(defensaNum) ? 0 : defensaNum;
        // Verificar si ya existe un Pokémon con el mismo nombre
        const existingPokemon = await Pokemon.findOne({
            where: {
                name: name
            }
        });

        // Si ya existe, enviar un mensaje de error
        if (existingPokemon) {
            return res.status(400).json({
                error: 'Ya existe un Pokémon con ese nombre.'
            });
        }

        // Si no existe, crear el nuevo Pokémon
        const newPokemon = await Pokemon.create({
            name,
            image,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
        });

        const typesToAssociate = await Type.findAll({
            where: {
                name: types  // types debe ser un array de nombres de tipo
            }
        });

        // Verificar si se encontraron los tipos especificados
        if (typesToAssociate.length < 2) {
            // Si hay menos de dos tipos, enviar un mensaje de error
            await newPokemon.destroy(); // Eliminar el Pokémon creado para evitar registros incompletos
            return res.status(400).json({
                error: 'Se requieren al menos dos tipos para un Pokémon.'
            });
        }
        // Asociar los tipos al nuevo Pokémon
        // Asociar los tipos al nuevo Pokémon
        await newPokemon.setTypes(typesToAssociate);

        res.status(200).json(newPokemon);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al crear el nuevo Pokémon'
        });
    }
};

module.exports = postPokemons;
