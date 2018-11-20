let survey = [];

const surveyApi = {
    saveProducts() {
        window.localStorage.setItem('products', JSON.stringify(survey));
    },
    getAll() {
        return JSON.parse(window.localStorage.getItem('products'));
    },
    add(product) {
        survey.push(product);
    },
};

export default surveyApi;