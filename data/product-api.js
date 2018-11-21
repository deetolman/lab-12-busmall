
let products = 
[{
    name:'bag',
    image: '../assets/bag.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'banana',
    image: '../assets/banana.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'bathroom',
    image: '../assets/bathroom.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'boots',
    image: '../assets/boots.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'bubblegum',
    image: '../assets/bubblegum.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'usb',
    image: '../assets/usb.gif',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'sweep',
    image: '../assets/sweep.png',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'breakfast',
    image: '../assets/breakfast.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'chair',
    image: '../assets/chair.jpg',
    viewCount:'0',
    clickedCount:'0'
}, 
{ name:'cthulhu',
    image: '../assets/cthulhu.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'dog-duck',
    image: '../assets/dog-duck.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'dragon',
    image: '../assets/dragon.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'pen',
    image: '../assets/pen.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'pet-sweep',
    image: '../assets/pet-sweep.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'scissors',
    image: '../assets/scissors.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'tauntaun',
    image: '../assets/tauntaun.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'unicorn',
    image: '../assets/unicorn.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'water-can',
    image: '../assets/water-can.jpg',
    viewCount:'0',
    clickedCount:'0'
},
{ name:'wine-glass',
    image: '../assets/wine-glass.jpg',
    viewCount:'0',
    clickedCount:'0'
}];

// function saveProducts() {
//     localStorage.setItem('products'. JSON.stringify(products));
// }

const productApi = {
    getAll() {
        const survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: product.viewCount,
                clicks: product.clickedCount
            };
        });

        return survey;
    }
};

export default productApi;