// import html from '../html.js';
// import ReportItem from './report-item.js';

// function makeTemplate() {
//     return html`
//     <ul class="report"></ul>
//     `;
// }

// export default class ViewingReport {
//     constructor(results) {
//         this.results = results;
//     }

//     render() {
//         const dom = makeTemplate();
//         const list = dom.querySelector('report');

//         this.results.forEach(product => {
//             const reportItem = new ReportItem(product);
//             list.appendChild(reportItem.render());
//         });
//         return dom;
//     }
// }