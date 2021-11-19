let countEl = document.getElementById("count-el");
let decrement = document.getElementById("count-el");
let multiplication = document.getElementById("count-el");
let division = document.getElementById("count-el");
let totalAmount = document.getElementById("total");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function determine() {
  count -= 1;
  decrement.innerText = count;
}

function save() {
  let countStr = count + ", ";
  totalAmount.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

console.warn("Let's count people on the subway!");
