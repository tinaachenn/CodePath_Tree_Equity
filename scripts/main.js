//Dark Mode
let themeButton = document.getElementById("theme-button");
// let footer = document.getElementById("footer");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // footer.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);


// const title = document.querySelector('h1');

// // Change an element's style
// title.style.color = 'red';
// title.style.font = 'Avenir';
// title.style.fontSize = '25px';


// // Modify text
// title.innerText = 'Chipped Cup';


// // Modify attributes
// title.setAttribute('class', 'top-heading');
// title.removeAttribute('id');