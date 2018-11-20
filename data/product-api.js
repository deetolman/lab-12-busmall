import products from '../js/product-list.js';

const productApi = {
    getAll() {
        const survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                viewCount: product.viewCount,
                clickedCount: product.clickedCount
            };
        });

        return survey;
    }
};

//     getAll() {
//         const json = localStorage.getItem('products');
//         if(json) {
//             products = JSON.parse(json);
//         }
//         return products;
//     },

// };

export default productApi;


