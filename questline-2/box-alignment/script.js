const boxContainer = document.getElementById("boxContainer");

const horizontalButton = document.getElementById("horizontalBtn");
const verticalButton = document.getElementById("verticalBtn");

horizontalButton.addEventListener("click", function () {
    boxContainer.classList.remove("vertical");
    boxContainer.classList.add("horizontal");
});

verticalButton.addEventListener("click", function () {
    boxContainer.classList.remove("horizontal");
    boxContainer.classList.add("vertical");
});