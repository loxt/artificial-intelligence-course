﻿function sum(arr = []) {
  return arr.reduce((a, b) => a + b);
}

function gradientDescent(n = 0) {
  return n * (1 - n);
}

function feedForward(inputs = [], target = 0, epochs = 1, activation = 'sigmoid') {
  if (target <= 0) target = 0.1;
  else if (target > 1) target = 1;

  let weights = [];

  for (let i = 0; i < inputs.length; i++) {
    weights.push(Math.random());
  }

  for (let i = 1; i <= epochs; i++) {
    let multiply = [];

    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j] <= 0) inputs[j] = 0.1;
      multiply.push(inputs[j] * weights[j]);
    }

    let sumResult = sum(multiply);
    let output = 0;

    switch (activation) {
      case 'tanh':
        output = parseFloat(tanh(sumResult)).toFixed(4);
        break;
      case 'sigmoid':
        output = parseFloat(sigmoid(sumResult)).toFixed(4);
        break;
      case 'relu':
        output = parseFloat(relu(sumResult)).toFixed(4);
        break;
      case 'leakyRelu':
        output = parseFloat(leakyRelu(sumResult)).toFixed(4);
        break;
      case 'binaryStep':
        output = parseFloat(binaryStep(sumResult)).toFixed(4);
        break;
      default:
        output = parseFloat(sigmoid(sumResult)).toFixed(4);
        break;
    }

    let error = parseFloat(Math.abs(target - output)).toFixed(4);
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j] <= 0) inputs[j] = 0.1;
      weights[j] += inputs[j] * gradientDescent(error);
    }
    let epoch = i.toString().padStart(7, '0');
    
    console.log(`Época: ${epoch} - taxa de erro: ${error} - saída: ${output}`);
  }
}

// hyperbolic tangent
function tanh(n = 0) {
  return Math.sinh(n) / Math.cosh(n);
}

// sigmoid function
function sigmoid(n = 0) {
  return 1 / (1 + Math.pow(Math.E, -n));
}

// linear unity rectification
function relu(n = 0) {
  return Math.max(n, 0);
}

// leaky linear unity rectification
function leakyRelu(n = 0) {
  return Math.max(n, 0.01);
}

// binary step
function binaryStep(n = 0) {
  return (n >= 0) ? 1 : 0;
}

feedForward([0], 0.1, 800, 'relu');
