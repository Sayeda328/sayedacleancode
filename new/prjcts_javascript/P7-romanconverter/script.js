let input = document.getElementById("input");
let button = document.getElementById("submit");
let errorMessage = document.getElementById("error");
let output = document.getElementById("output");

const romanObjects = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XV: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
 button.addEventListener('click', () => {
  inputToRoman(input.value);
  input.value = "";
});
function inputToRoman(num) {
  let number = parseInt(num);

  if (num.trim().length == 0) {
    errorMessage.innerHTML = "invalid input";
    output.innerHTML = "";
    return false;
  }

  if (number > 4999 || number < 1) {
    errorMessage.innerHTML = "input out of range";
    output.innerHTML = "";
    return false;
  }
  errorMessage.innerHTML = "";
  output.innerHTML = "";

  let result = "";
  let romanValues = Object.keys(romanObjects);
  romanValues.forEach((key) => {
    while (romanObjects[key] <= number) {
      number -= romanObjects[key];
      result += key;
    }
  });
  output.innerHTML = result;
}
;
