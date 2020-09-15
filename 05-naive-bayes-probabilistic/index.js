let inputs = [];
let classes = [];

function removeDuplicates(arr = []) {
  arr = [...new Set(arr)];
  return arr;
}

function returnClasses() {
  let arr = classes;
  arr = removeDuplicates(arr);
  return arr;
}

function countText(text = '', search = '') {
  return text.split(search).length - 1;
}

function organize() {
  let params = {};

  for (let i = 0; i < inputs.length; i++) {
    let char = '';

    if (i < inputs.length - 1) char = '-';

    if (params[classes[i]]) {
      params[classes[i]] += inputs[i] + char;
    } else {
      params[classes[i]] = inputs[i] + char;
    }
  }

  let str = JSON.stringify(params);
  str = str.replace(/-"/g, '"').replace(/-/g, ',');
  params = JSON.parse(str);

  return params;
}

function frequency() {
  let categories = [];
  let params = {};
  const object = organize();
  const labels = returnClasses();

  for (let i = 0; i < inputs.length; i++) {
    params['Input'] = inputs[i];

    for (let j = 0; j < labels.length; j++) {
      params[labels[j]] = countText(object[labels[j]], inputs[i]);
    }

    categories[i] = JSON.stringify(params);
  }

  categories = removeDuplicates(categories);

  for (let i = 0; i < categories.length; i++) {
    categories[i] = JSON.parse(categories[i]);
  }

  return categories;
}

function classesQuantity() {
  const categories = frequency();
  return parseInt(String(Object.keys(categories[0]).length - 1));
}

function sumClasses(arr = []) {
  let sum = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }

  return sum;
}

function totalPerClass() {
  let totalClasses = [];
  const nameClasses = returnClasses();
  const strClasses = JSON.stringify(classes);

  for (let i = 0; i < nameClasses.length; i++) {
    totalClasses[nameClasses[i]] = countText(strClasses, nameClasses[i]);
  }
  return totalClasses;
}

function sumTotalClasses() {
  const vetTemp = Object.values(totalPerClass());
  let sum = 0;
  for (let i = 0; i < vetTemp.length; i++) {
    sum += parseFloat(String(vetTemp[i]));
  }

  return sum;
}

function occurrenceClassForInput(_input = '', _class = '') {
  const categories = frequency();
  let ret = 0;

  categories.forEach((item) => {
    if (item['Input'] === _input) {
      ret = parseFloat(item[_class]);
    }
  });
  return ret;
}

function naiveBayes(_input = '') {
  const classNames = returnClasses();
  const totalClass = totalPerClass();

  const categories = frequency();
  let sum = 0;
  categories.forEach((item) => {
    if (item['Input'] === _input) {
      for (let i = 0; i < classNames.length; i++) {
        sum += parseFloat(item[classNames[i]]);
      }
    }
  });

  let probability = [];

  for (let i = 0; i < classNames.length; i++) {
    probability[classNames[i]] =
      (occurrenceClassForInput(_input, classNames[i]) / totalClass[classNames[i]]) *
      (totalClass[classNames[i]] / sumTotalClasses()) /
      (sum / sumTotalClasses());
  }

  return probability;
}

function train(_inputs = [], _classes = []) {
  inputs = _inputs;
  classes = _classes;
}

function predict(selInput = '') {
  const classNames = returnClasses();
  let probabilities = [];

  if (selInput.toString().trim().length > 0) {
    const naive = naiveBayes(selInput);

    for (let i = 0; i < classNames.length; i++) {
      const percentage = +parseFloat(String(naive[classNames[i]] * 100)).toFixed(2);
      probabilities.push({ class: classNames[i], probability: percentage });
    }
  } else {
    probabilities.push({ class: '', probability: 0 });
  }

  return probabilities;
}

