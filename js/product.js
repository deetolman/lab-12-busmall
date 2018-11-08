import html from '../html.js';

function makeTemplate(product) {
    return html`
        <li class="product">
            <h3>${product.name}</h3>
            <img src="../assets/${product.image}">

        </li>
    `;
}

class ProductCard {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate(this.product);
        const listItem = dom.querySelector('li');
        const product = this.product;

        if(this.onSelect) {
            listItem.addEventListener('click', () => {
                this.onSelect(product);
            });
        }
        return dom;
    }
}

export default ProductCard;
