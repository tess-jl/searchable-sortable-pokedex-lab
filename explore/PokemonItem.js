import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const { pokemon, color_1, url_image, hp, generation_id } = this.props.pokemon; 

        return /*html*/`
        <li class="pokemon-item" style="background: ${color_1}">
            <h2>${pokemon}</h2>

            <img src="${url_image}" alt="${pokemon} image">

            <p class="hp">hp: ${hp}</p>

            <p class="pokemon-gen">gen: ${generation_id}</p>
        </li>
        `;
    }
}

export default PokemonItem;

