const linearRegression = require('./linear-regression');

const regression = new linearRegression();
regression.loadModel('./model/model-regression.json');

const result = regression.predict([5, 6, 7, 8, 9, 10]);
console.log(result);
