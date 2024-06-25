const changeText = document.querySelector("#change-text");

changeText.addEventListener("click", function () {
  changeText.textContent = "Have a Good Time!";
});

document.getElementById("toggle-button").addEventListener("click", function () {
  var boxes = document.querySelectorAll(".container-action");
  boxes.forEach(function (box) {
    box.classList.toggle("visible");
  });
});
