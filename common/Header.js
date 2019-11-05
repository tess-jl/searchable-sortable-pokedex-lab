import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <section>
                    <img class="logo" src="../assets/logo.jpg" alt="Pokedex logo">
                    <h1>Pokedex</h1>
                    <img class="logo" src="../assets/logo.jpg" alt="Pokedex logo">
                </section>
                <nav>
                    <div>
                        <a href="./">Home</a>
                        <a href="explore.html">Explore</a>
                    </div>
                </nav>
            </header>
        `;
    }
}

export default Header;

