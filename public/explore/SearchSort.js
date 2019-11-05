import Component from '../Component.js';

class SearchSort extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        // const typeDropdown = form.querySelectorAll('option[name=sort]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || '';


            // const option = searchParams.get('type');
            // if (option) {
            //     typeDropdown.forEach(option => {
            //         option.selected = typeDropdown.value === option;
            //     });
            // }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            // searchParams.set('type', formData.get('type'));
            searchParams.set('pokemon', formData.get('search'));
            
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }




    renderHTML() {
        return /*html*/`
            <form class="search-sort">

                <div class="search">
                    <p>Search For:</p>
                    <input name="search">
                    <button>🔍</button>
                </div>

                <select name="sort-dropdown"class="sort-dropdown">
                    <option name="sort" value="by-pokemon" selected>by pokemon</option>
                    <option name="sort" value="by-type">by type</option>
                    <option name="sort" value="by-hp">by hp</option>
                    <option name="sort" value="by-generation">by generation</option>
                </select>

            </form>
        `;
    }
}

export default SearchSort;

