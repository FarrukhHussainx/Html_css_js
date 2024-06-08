document.getElementById("colorButton").addEventListener("click", function () {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33A1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  this.style.backgroundColor = randomColor;
});
