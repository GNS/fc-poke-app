const pokeApi = 'https://pokeapi.co/api/v2';
const pokemonCount = 151;

export const ApiEndpoints = {
    pokeList        : `${pokeApi}/pokemon?limit=${pokemonCount}&offset=0`,
    pokeTypes       : `${pokeApi}/type`,
}
