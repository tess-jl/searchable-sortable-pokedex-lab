import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

class HomeApp extends Component {

    onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());

        const footer = new Footer(); 
        element.append(footer.renderDOM());

    }



    renderHTML() {
        return /*html*/`
            <div>
                <!-- where I dynamically render the header -->
                
                <main>
                    <p>
                        Home page of Pokedex!
                        <a href="explore.html">Click here to search and sort 'em all!</a>
                    </p>
                </main>
            </div>
        `;
    }
}

export default HomeApp;