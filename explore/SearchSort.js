import Component from '../Component.js';

class SearchSort extends Component {

    renderHTML() {
        return /*html*/`
            <div class="search-sort">

                <form class="search">
                    <p>Search For:</p>
                    <input name="search">
                    <button>🔍</button>
                </form>

                <select class="sort-dropdown">
                    <option value="by-pokemon" selected>by pokemon</option>
                    <option value="by-type">by type</option>
                    <option value="by-hp">by hp</option>
                    <option value="by-generation">by generation</option>
                </select>

            </div>
        `;
    }
}

export default SearchSort;

