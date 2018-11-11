import html from '../html.js';
import productApi from '../data/product-api.js';
// import surveyApi from '../data/survey-api.js';
import ProductSelector from './product-selector.js';
// import ViewingChart from '../js/viewing-chart.js';
    
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
            // this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const productSelectorSection = dom.querySelector('.product-selector');
        // const chartSection = dom.querySelector('.report-survey');
        // const viewingChart = new ViewingChart(this.surveyData);
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

            // window.location.href = '';
            //save survey via api, redirect to results, 
        });
        productSelectorSection.appendChild(productSelector.render());
        // chartSection.appendChild(viewingChart.render());
        return dom;
    }
}

const app = new App();
document.getElementById('root').appendChild(app.render());