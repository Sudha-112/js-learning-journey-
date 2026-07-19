const form = document.querySelector('form');
//this usecase will give you empty value
// const height = document.queryselector('#height').value;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results1 = document.querySelector('#results1');
  const results2 = document.querySelector('#results2');

  if (height === '' || height < 0 || isNaN(height)) {
    results1.innerHTML = '*Please give a valid height';
  }

  if (weight === '' || weight < 0 || isNaN(weight)) {
    results2.innerHTML = '*Please give a valid weight';
  }
 
  const BMI = (weight / ((height*height)/10000)).toFixed(2);

  results3.innerHTML = `Your BMI is ${BMI}`;

});
