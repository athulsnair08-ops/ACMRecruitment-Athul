let count = 0;

const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

decrementButton.addEventListener("click", function () {
    count--;
    counter.textContent = count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
});