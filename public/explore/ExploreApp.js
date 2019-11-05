import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchSort from './SearchSort.js';
import Pagination from './Pagination.js';
import PokemonList from './PokemonList.js';
import Footer from '../common/Footer.js';
import { getPokemon } from '../services/pokemon-api.js';

class ExploreApp extends Component {

    async onRender(element) {
        const header = new Header(); 
        element.prepend(header.renderDOM());

        const searchSortSection = element.querySelector('.search-sort-section');
        const searchSort = new SearchSort();
        searchSortSection.prepend(searchSort.renderDOM());

        const pokemonSection = element.querySelector('.pokemon-section');
        const paging = new Pagination();
        pokemonSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        pokemonSection.appendChild(pokemonList.renderDOM());

        const footer = new Footer(); 
        element.append(footer.renderDOM());

        async function loadPokemon() {
            const response = await getPokemon();
            const pokemon = response.results;
            const totalResults = response.count;
            pokemonList.update({ pokemon });
            paging.update({ totalResults });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header with nav-->
                
                <main>
                    <section class="search-sort-section">
                        <!-- search and sort -->
                    </section>
                        
                    <section class="pokemon-section">
                        <!-- pagination -->
                        <!-- pokemon list full of pokemon items -->     
                    </section>
                </main>

            </div>
        `;
    }
}

export default ExploreApp; 