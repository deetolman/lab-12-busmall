import html from '../html.js';

let template = function(product) {
    return html`
        <li class="product">
            <h3 class="product-name">${product.name}</h3>
            <img src="../assets/${product.image}" alt="${product.name}">
        </li>
    `;
};

class ProductCard {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.product);
        this.li = dom.querySelector('li');
        let product = this.product;

        this.li.addEventListener('click', () => {
            this.onSelect(product);
        });    
        this.li.src = this.product.image;
        return dom;
    }
}

export default ProductCard;
