import html from '../html.js';
import ProductCard from './product.js';

function makeTemplate() {
    return html`
    <ul class="products"></ul>
    `;
}

class ProductSelector {
    constructor(products, onComplete) {
        this.products = products;
        this.onComplete = onComplete;
        this.lastThree = [];
        this.imageDisplayed = [];
        this.rounds = 25;
    

    }        
    getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }
    getRandomThree() {
        const randomProducts = [];
        const products = this.products;
        for(let i = 0; i < 3; i++) {
            const newIndex = this.getRandomIndex(products.length);
            const product = products[newIndex];
            if(randomProducts.includes(product) || this.lastThree.includes(product)) {
                i--;
            } else {
                randomProducts.push(products[newIndex]);
            }
        } 
        this.lastThree = randomProducts;
        return randomProducts;
    }
    displayRandomThree() {
        const randomProducts = this.getRandomThree();
        randomProducts.forEach(product => {
            product.viewCount++;
            const productCard = new ProductCard(product, selected => {
                selected.clickedCount++;
                this.rounds--;
                if(this.rounds > 0) {
                    this.clearProducts();
                    this.displayRandomThree();
                } else {
                    this.onComplete(this.products);          
                }
            });
            this.list.appendChild(productCard.render());
        });
    }

    clearProducts() {
        while(this.list.lastElementChild) {
            this.list.lastElementChild.remove();
        }
    }
    
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector ('ul');
        this.displayRandomThree();
        return dom;        
    }
}

export default ProductSelector;