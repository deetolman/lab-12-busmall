import html from '../html.js';
import productApi from '../data/product-api.js';
import ProductSelector from './product-selector.js';
    
const products = productApi.getAll();

function makeTemplate() { 
    return html`
    <header>Pick a product</header>
    <div></div>
    <main>
    <section class="product-selector"></section>
    <section class="report-survey"></section>
    </main>
    `;
}

class App {
    constructor() {
    }
    render() {
        const dom = makeTemplate();
        const productSelectorSection = dom.querySelector('.product-selector');
        const productSelector = new ProductSelector(products, survey => {
            ('survey', survey);
            this.survey = products.map(product => {
                return {
                    name: product.name,
                    image: product.image,
                    viewCount: product.viewCount,
                    clickedCount: product.clickedCount
                };  
            }
            ); 
        });
        productSelectorSection.appendChild(productSelector.render());
        return dom;
    }
}

const app = new App();
document.getElementById('root').appendChild(app.render());