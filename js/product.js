import html from '../html.js';

function makeTemplate() {
    return html`
        <li class="product">
            <h3 class="product-name">${product.name}</h3>
            <img src="../assets/${product.image}" alt="${product.name}">
        </li>
    `;
};

class ProductCard {
    constructor(product, onSelect, onView) {
        this.product = product;
        this.onSelect = onSelect;
        this.onView = onView;
    }

    render() {
        const dom = makeTemplate();
        this.li = dom.querySelector('li');
        let product = this.product;

        this.li.addEventListener('click', () => {
            this.onSelect(product);
        });    
        return dom;
    }
}

export default ProductCard;
