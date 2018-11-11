import html from '../html.js';
// import productApi from '../data/product-api.js';

function makeTemplate() {
    return html`
        <h2> Chart Summary</h2>
        <div class="viewing-chart">
        <canvas></canvas>
        </div>
    `;
}

export default class ViewingChart {
    constructor(results) {
        this.results = results;
    }
    render() {
        let dom = makeTemplate();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        const products = JSON.stringify(localStorage.getItem('saveSurvey'));
        let labels = [];
        let viewCount = [];
        let clickedCount = [];

        for(let i = 0; i < products.length; i++) {
            labels.push(products[i].name);
            viewCount.push(products[i].viewCount);
            clickedCount.push(products[i].clickedCount);

        }
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: clickedCount,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                { label: '# of clicks',
                    data: viewCount,
                    backgroundColor: 'blue',
                    borderColor: 'black',
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