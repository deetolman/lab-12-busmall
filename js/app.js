import productApi from '../data/product-api.js';
import html from '../html.js';
import ProductSelector from './product-selector.js';
import surveyApi from '../data/survey-api.js';
    
// const products = productApi.getAll();

function makeTemplate() { 
    return html`
    <header>Pick a product</header>
    <div></div>
    <main>
    <ul class="products"></ul>
    <section class="product-selector"></section>
    <section class="report-survey"></section>
    </main>
    `;
}

class App {
    constructor() {
        // this.onSelect = onSelect;
        this.products = productApi.getAll();
        this.totalRounds = 0;
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        const productSelector = new ProductSelector(this.products, product => {
            this.totalRounds++;
            product.clicks
            surveyApi.add(product);
            this.totalCount++;
            productSelector.update();
            if(this.totalRounds === 25) {
                surveyApi.saveProducts();
                window.location.replace('../user-summary.html');
            }
        });
        this.list.appendChild(productSelector.render());
        return dom;
            // this.survey = products.map(product => {
            //     return {
            //         name: product.name,
            //         image: product.image,
            //         viewCount: product.viewCount,
            //         clickedCount: product.clickedCount
    }  
}
       
        // productSelectorSection.appendChild(productSelector.render());
        // return dom;

const app = new App();
document.getElementById('root').appendChild(app.render());