const noSmall = document.getElementById("noSmall");
const noBig = document.getElementById("noBig");

let scale = 1;

/* prima interacțiune */
function activateBigNo() {
  noSmall.classList.add("hidden");
  noBig.classList.add("active");

  moveBig();
}

/* mișcare + micșorare */
function moveBig() {

  scale = Math.max(scale * 0.8, 0.3);

  noBig.style.transform = `translate(-50%, -50%) scale(${scale})`;

  const maxX = window.innerWidth - noBig.offsetWidth;
  const maxY = window.innerHeight - noBig.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBig.style.left = x + "px";
  noBig.style.top = y + "px";
}

/* EVENTS */
noSmall.addEventListener("mouseenter", activateBigNo);
noBig.addEventListener("mouseenter", moveBig);

/* mobile */
noSmall.addEventListener("touchstart", (e) => {
  e.preventDefault();
  activateBigNo();
});

noBig.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveBig();
});
