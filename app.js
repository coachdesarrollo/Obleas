const btn = document.getElementById("btn");
const elemento = document.getElementById("elemento");

let State = false;

const ChangeColor = () => {
  if (State) {
    document.documentElement.style.setProperty("--colorFondo", "#faeed6");
    document.documentElement.style.setProperty("--colorLetras", "#e9ab57");
  } else {
    document.documentElement.style.setProperty("--colorLetras", "#faeed6");
    document.documentElement.style.setProperty("--colorFondo", "#3d1d0d");
  }
  State = !State;
};
btn.addEventListener('click', ()=> ChangeColor())