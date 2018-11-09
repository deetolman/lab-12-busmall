import html from '../html.js';

let template = function(product) {
    return html`
        <li class="product">
            <h3 class="product-name">${product.name}</h3>
            <img src="../assets/${product.image}" alt="${product.name}">
        </li>
    `;
};

export default class ProductCard {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.product);
        this.li = dom.querySelector('li');
        let product = this.product;

        this.li.addEventListener('click', () => {
            console.log('click', product);
            this.onSelect(product);
        });
        // }
    
        
        return dom;
    }
}

