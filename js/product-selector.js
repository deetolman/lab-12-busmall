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
        // this.onComplete = onComplete;
        // this.lastThree = [];
        // this.imageDisplayed = [];
        // this.rounds = 25;
    }        
    
    render() {
        let dom = makeTemplate();
        this.ul = dom.querySelector ('ul');
        this.update();
        return dom;        
    }
    update() {
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }

        for(let i = 0; i < 3; i++) {
            let index = this.getRandomIndex();
            let productCard = new ProductCard(this.products[index], this.onSelect);
            this.products[index].views++;

            this.ul.appendChild(productCard.render());

        }
    }
    getRandomIndex() {
        const index = Math.floor(Math.random() * 25);
        return index;
    }
}

export default ProductSelector;


// getRandomThree() {
    //     const randomProducts = [];
    //     const products = this.products;
    //     for(let i = 0; i < 3; i++) {
    //         const newIndex = this.getRandomIndex(products.length);
    //         const product = products[newIndex];
    //         if(randomProducts.includes(product) || this.lastThree.includes(product)) {
    //             i--;
    //         } else {
    //             randomProducts.push(products[newIndex]);
    //         }
    //     } 
    //     this.lastThree = randomProducts;
    //     return randomProducts;
    // }
    // displayRandomThree() {
    //     const randomProducts = this.getRandomThree();
    //     randomProducts.forEach(product => {
    //         product.viewCount++;
    //         const productCard = new ProductCard(product, selected => {
    //             selected.clickedCount++;
    //             this.rounds--;
    //             if(this.rounds > 0) {
    //                 this.clearProducts();
    //                 this.displayRandomThree();
    //             } else {
    //                 this.onComplete(this.products);          
    //             }
    //         });
    //         this.list.appendChild(productCard.render());
    //     });
    // }

    // clearProducts() {
    //     while(this.list.lastElementChild) {
    //         this.list.lastElementChild.remove();
    //     }
    // }