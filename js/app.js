import html from '../html.js';
import productsApi from '../data/products-api.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <h1>Hello World</h1>
    <main>
    <section id="product-list">
    <p>Vote for a product!</p>
    </section>
    </main>
    `;
}
class SurveyApp {
    render() {
        const dom = makeTemplate();
        const mainSection = dom.querySelector('main');
        const productSelector = new productSelector(products);
        mainSection.appendChild(productSelector(products));
        return dom;
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());




