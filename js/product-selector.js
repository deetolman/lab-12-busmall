import html from '../html.js';
import ProductCard from './product.js';

function makeTemplate() {
    return html`
    <ul class="products"></ul>
    `;
}

class ProductSelector {
    constructor(products, onSelect, onComplete) {
        this.products = products;
        this.onSelect = onSelect;
        this.onComplete = onComplete;
        this.lastThree = [];
        // this.imageDisplayed = [];
        // this.rounds = 25;
    }   

    render() {
        const dom = makeTemplate();
        this.ul = dom.querySelector ('ul');
        this.update();
        return dom;
    }
    update() {
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }
        for(let i = 0; i < 3; i++) {
            
            let randomProduct = new ProductCard(this.products[this.randomInt()], this.onSelect, this.onComplete);
            this.ul.appendChild(randomProduct.render());
        }
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(18));
        return index;
    }
}
    
export default ProductSelector;