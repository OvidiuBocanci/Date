const noBtn = document.getElementById("noBtn");

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});