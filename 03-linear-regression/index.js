function product(x = [], y = []) {
  let temp = [];

  for (let i = 0; i < x.length; i++)
    temp.push(parseFloat(x[i]) * parseFloat(y[i]));

  return temp;
}

function square(x = []) {
  let temp = [];

  for (let i = 0; i < x.length; i++) 
    temp.push(parseFloat(x[i]) * parseFloat(x[i]));
  
  return temp;
}

function summation(x = []) {
  let temp = 0;

  for (let i = 0; i < x.length; i++)
    temp += parseFloat(x[i]);

  return temp;
}

function average(x = []) {
  return summation(x) / x.length;
}

function results(x = [], y = [], p = 0) {
  const result1 = (summation(x) * summation(y)) / x.length;
  const result2 = (summation(x) * summation(x)) / x.length;
  const result3 = summation(product(x, y)) - result1;
  const result4 = result3 / (summation(square(x)) - result2);
  const result5 = average(y) - (result4 * average(x)); 

  return ((result4 * p) + result5).toFixed(0);
}

function linearRegression(axisX = [], axisY = []) {
  const sizeX = axisX.length;
  const sizeY = axisY.length;

  const tempX = axisX.slice(0, sizeY);
  const tempY = axisY;

  const diff = sizeX - sizeY;
  
  if (diff > 0) {
    let regressions = [];

    for (let i = 0; i < diff; i++) {
      const temp = Number(results(tempX, tempY, axisX[sizeY + i]));
      regressions.push(temp);
    }

    const newY = tempY.concat(regressions);

    console.log(`Axis X: ${axisX}\nAxis Y: ${newY}`);
  }
}

linearRegression([1, 2, 3, 4, 5], [11, 22, 33, 44]);
