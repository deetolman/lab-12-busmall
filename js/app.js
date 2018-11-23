import html from '../html.js';
import productApi from '../data/product-api.js';
import surveyApi from '../data/survey-api.js';
import ProductSelector from './product-selector.js';
    
function makeTemplate() { 
    return html`
        <header>Pick a product</header>
        <main>
        <li class="products">
            <section class="product-selector"></section>
        </li>
        </main>
    `;
}

class App {
    constructor() {
        this.products = productApi.getAll();
            // this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('li');
        const productSelector = new ProductSelector(this.products, product => {
            this.totalRounds++;
            product.clicks++;
            surveyApi.add(product);

            if(this.totalRounds === 25) {
                window.location = '../user-summary.html';
            }
            // productSelector.update();
        },
        product => {
            product.views++;
        });

        this.list.appendChild(productSelector.render());
        return dom;
    }
}
    
const app = new App();
document.getElementById('root').appendChild(app.render());