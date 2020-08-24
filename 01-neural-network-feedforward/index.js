function sum(arr = []) {
  return arr.reduce((a, b) => a + b);
}

function gradientDescent(n = 0) {
  return n - (1 - n);
}

function feedForward(inputs = [], target = 0, epochs = 1) {
  if (target <= 0) target = 0.1;
  else if (target > 1) target = 1;

  let weights = [];

  for (let i = 0; i < inputs.length; i++) {
    weights.push(Math.random());
  }

  for (let i = 1; i <= epochs; i++) {
    
  }
}
