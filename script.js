const noSmall = document.getElementById("noSmall");
const noBig = document.getElementById("noBig");

/* prima interacțiune */
function activateBigNo() {
  // 🔵 ascunde NO mic
  noSmall.classList.add("hidden");

  // 🔴 arată NO mare
  noBig.classList.add("active");

  moveBigNo();
}

/* mișcare NO mare */
function moveBigNo() {
  const padding = 20;

  const maxX = window.innerWidth - noBig.offsetWidth - padding;
  const maxY = window.innerHeight - noBig.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBig.style.left = x + "px";
  noBig.style.top = y + "px";
}

/* evenimente */
noSmall.addEventListener("mouseenter", activateBigNo);
noBig.addEventListener("mouseenter", moveBigNo);

/* mobile */
noSmall.addEventListener("touchstart", (e) => {
  e.preventDefault();
  activateBigNo();
});

noBig.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveBigNo();
});