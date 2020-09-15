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
  return +Object.keys(categories[0]).length - 1;
}
