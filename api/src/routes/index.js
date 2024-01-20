const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('../controllers/getPokemons');
const getPokemonsById = require('../controllers/getPokemonsById');
const postPokemons = require('../controllers/postPokemons');
const getTypes = require('../controllers/getTypes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemons);
router.get("/pokemons/:idPokemon", getPokemonsById);
router.post("/pokemons", postPokemons);
router.get("/types", getTypes);

module.exports = router;
