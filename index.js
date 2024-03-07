AOS.init();
// top to bottom :

let demo = () => {
  let progress = document.getElementById("progresss");
  let pos = document.documentElement.scrollTop;
  let bg_color = document.getElementById("bg_rang");
  if (pos > 100) {
    progress.style.display = "grid";
    bg_color.style.backgroundColor = "#0dc6da";
  } else {
    progress.style.display = "none";
    bg_color.style.backgroundColor = "transparent";
  }
  progress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};
window.onscroll = demo;
window.onload = demo;
