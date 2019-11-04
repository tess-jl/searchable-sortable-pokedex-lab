import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(element) {

        const { pokemon } = this.props;

        pokemon.forEach(pokemon => {
            const props = { pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            element.appendChild(pokemonItemDOM);
        });
    }

    renderHTML() {
        
        return /*html*/`
            <ul class="pokemon-list"></ul>
        `;
    }
}

export default PokemonList;