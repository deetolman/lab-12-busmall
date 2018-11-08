import productApi from '../data/product-api.js';
import html from '../html.js';
import ProductSelector from './product-selector.js';

const products = productApi.getAll();

function makeTemplate() { 
    return html`
    <header>
    </header>
    <div></div>
    <main>
    <section class="product-selector"></section>
    <section id""></section>
    </main>
    `;
}

class App {
    render() {
        const dom = makeTemplate();
        const productSelectorSection = dom.querySelector('.product-selector');
        const productSelector = new ProductSelector(products);
        productSelectorSection.appendChild(productSelector.render());

        return dom;
    }
}

const app = new App();
document.getElementById('root').appendChild(app.render());