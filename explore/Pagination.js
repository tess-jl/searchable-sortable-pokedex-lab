import Component from '../Component.js';

class Pagination extends Component {
    renderHTML() {
        return /*html*/`
            <p class="pagination-bar">
                <button class="previous" disabled>◀</button>
                <span>Page 1 of 5</span>
                <button class="next">▶</button>
            </p>
        `;
    }
}

export default Pagination;

