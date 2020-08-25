function product(x, y) {
  let temp = [];

  for (let i = 0; i < x.length; i++)
    temp.push(parseFloat(x[i]) * parseFloat(y[i]));

  return temp;
}
