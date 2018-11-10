import html from '../html.js';

function makeTemplate() {
    return html`
        <h2> Chart Summary</h2>
        <div class="chart-summary">
    `;
}

export default class ProductChart {
    constructor(products) {
        this.products = products;
    }

    render() {
        let dom = makeTemplate();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            labels.push(product.name);
            data.push(product.viewCount);
        }
        this.chart = new tu(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }  
        });
        return dom;
    }
}