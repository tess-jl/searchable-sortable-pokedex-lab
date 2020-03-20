import Component from '../Component.js';

class Pagination extends Component {

    onRender(element) {
        const previousButton = element.querySelector('.previous');
        const nextButton = element.querySelector('.next');

        if (!previousButton) {
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }

        updateControls();


        window.addEventListener('hashchange', () => {
            updateControls();
        });




        function updatePageNumber(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        previousButton.addEventListener('click', () => {
            updatePageNumber(-1);
        });
        
        nextButton.addEventListener('click', () => {
            updatePageNumber(1);
        });
    }





    renderHTML() {

        const perPage = 20;
        const totalResults = this.props.totalResults;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }

        //when there is no results for search show user message ... 
        if (!totalResults) {
            return /*html*/`
                <p class="pagination-bar">No results! search for something else</p>
            `;
        }

        const lastPage = Math.ceil(totalResults / perPage);
        return /*html*/`
            <p class="pagination-bar">
                <button class="previous" ${page === 1 ? 'disabled' : ''}>◀</button>
                <span>Page ${page} of ${lastPage}</span>
                <button class="next"${page === lastPage ? 'disabled' : ''}>▶</button>
            </p>
        `;
    }
}

export default Pagination;

