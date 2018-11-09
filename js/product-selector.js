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
        this.lastThree = [];
    }        
    getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
        //view count
    }
    getRandomThree() {
        const randomProducts = [];
        const products = this.products;
        for(let i = 0; i < 3; i++) {
            const newIndex = this.getRandomIndex(products.length);
            const product = products[newIndex];
            if(randomProducts.includes(product) || this.lastThree.includes(product)) {
                i--;
                console.log('dups');
            } else {
                randomProducts.push(products[newIndex]);
            }
        } 
        this.lastThree = randomProducts;
        console.log('lastThree', this.lastThree);
        return randomProducts;
    }
    displayRandomThree() {
        const randomProducts = this.getRandomThree();
        randomProducts.forEach(product => {
            const productCard = new ProductCard(product, this.onSelect);
            this.list.appendChild(productCard.render());
        });
    }
    
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector ('ul');
        this.displayRandomThree();
        return dom;        
    }
}

export default ProductSelector;