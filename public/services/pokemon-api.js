const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function getPokemon() {
    let queryString = window.location.hash.slice(1);
    const url = `${URL}?${queryString}`;
    const response = await fetch(url);

    return await response.json();
}