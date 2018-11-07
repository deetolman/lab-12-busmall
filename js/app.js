import html from '../html.js';
import productsApi from '../data/products-api.js';
import ProductSelector from './product-selector.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <h1>Please click on an image</h1>
    <main>
    <section id="product-list">
    <h2>Vote for your favorite<h2>
    <p></p>
    </section>
    </main>
    `;
}
class SurveyApp {
    render() {
        const dom = makeTemplate();
        const mainSection = dom.querySelector('main');
        const productSelector = new ProductSelector(products);
        
        mainSection.appendChild(productSelector.render());
        return dom;
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());




