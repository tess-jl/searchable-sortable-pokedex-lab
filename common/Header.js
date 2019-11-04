import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <section>
                    <img class="logo" src="../assets/logo.jpg" alt="Pokedex logo">
                    <h1>Pokedex</h1>
                </section>
                <nav>
                    <a href="./">Home</a>
                    <a href="explore.html">Explore</a>
                </nav>
            </header>
        `;
    }
}

export default Header;

