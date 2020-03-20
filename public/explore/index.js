import ExploreApp from './ExploreApp.js';

const app = new ExploreApp();
const element = app.renderDOM();
document.body.prepend(element);