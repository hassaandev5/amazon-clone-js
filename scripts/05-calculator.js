// let calculation = "";
let calculation = localStorage.getItem("calculation") || "";
const paraCal = document.querySelector(".js-calculation");
paraCal.innerText = `${calculation}`;
function updateCalculation(number) {
  calculation += number;
  localStorage.setItem("calculation", calculation);
  console.log(calculation);
  paraCal.innerText = `${calculation}`;
}
function clearCalculation() {
  calculation = "";
  localStorage.setItem("calculation", calculation);
  console.log("Cleared");
  paraCal.innerText = `${calculation}`;
}
function calculationResult() {
  calculation = eval(calculation);
  localStorage.setItem("calculation", calculation);
  console.log(calculation);
  paraCal.innerText = `${calculation}`;
}
