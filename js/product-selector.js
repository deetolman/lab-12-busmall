import html from '../html.js';
import ProductCard from './product.js';

function makeTemplate() {
    return html`
    <ul class="products"></ul>
    `;
}

class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector ('ul');

        for(let i = 0; i < this.products.length; i++) {
            this.add(this.products[i]);
        }
        return dom;        
    }
    add(product) {
        const productCard = new ProductCard(product, this.products, this.onSelect);
        this.list.appendChild(productCard.render());
    } 
}

export default ProductSelector;