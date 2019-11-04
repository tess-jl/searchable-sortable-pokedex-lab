import PokemonItem from '../explore/PokemonItem.js';
const test = QUnit.test;

QUnit.module('Render Movie Item');

test('renders html from data', assert => {
    // arrange
    const pokemon = {
        '_id': '5cef3501ef6005a77cd4fdd0',
        'pokemon': 'pichu',
        'id': 187,
        'species_id': 172,
        'height': 3,
        'weight': 20,
        'base_experience': 41,
        'type_1': 'electric',
        'type_2': 'NA',
        'attack': 40,
        'defense': 15,
        'hp': 20,
        'special_attack': 35,
        'special_defense': 35,
        'speed': 60,
        'ability_1': 'static',
        'ability_2': 'NA',
        'ability_hidden': 'lightning-rod',
        'color_1': '#F8D030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'no-eggs',
        'egg_group_2': 'NA',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        'generation_id': 2,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 10,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'pichu',
        'pokedex': 'http://www.pokemon.com/us/pokedex/pichu'
    };

    const expected = /*html*/`
    <li class="pokemon-item" style="background: ${pokemon.color_1}">
        <h2>${pokemon.pokemon}</h2>

        <img src="${pokemon.url_image}" alt="${pokemon.pokemon} image">

        <p class="hp">hp: ${pokemon.hp}</p>

        <p class="pokemon-gen">gen: ${pokemon.generation_id}</p>
    </li>
    `;

    // act
    const props = { pokemon: pokemon };
    const pokemonItem = new PokemonItem(props);
    const html = pokemonItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});