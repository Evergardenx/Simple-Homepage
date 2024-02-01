const switchDarkMode = document.querySelector('#switch');
const sun = document.querySelector('#sun');
const svgElement = document.getElementById('moon')
const bodyE = document.body;

switchDarkMode.addEventListener('change', e  =>{
  svgElement.style.fill = e.target.checked ? '#fff' : '#000';
  sun.src = e.target.checked ? '../img/Sun_fill.svg' : '../img/Sun_fillW.svg';
  bodyE.classList.toggle("dark-mode")
})

