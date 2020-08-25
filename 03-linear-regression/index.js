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
  let temp = [];

  for (let i = 0; i < x.length; i++)
    temp += parseFloat(x[i]);

  return temp;
}

function average(x = []) {
  return summation(x) / x.length;
}

function linearRegression(x = [], y = [], p) {
  const result1 = (summation(x) * summation(y)) / x.length;
  const result2 = (summation(x) * summation(x)) / x.length;
  const result3 = summation(product(x, y)) - resultado1;
  const result4 = result3 / (summation(square(x)) - result2);
  const result5 = average(y) - (result4 * average(x)); 

  return ((result4 * p) + result5).toFixed(0);
}
