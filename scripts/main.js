//Dark Mode
let themeButton = document.getElementById("theme-button");
// let footer = document.getElementById("footer");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // footer.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

//adding signatures function
const signNowButton = document.getElementById("sign-now-button");
const signaturesDiv = document.querySelector('.signatures');

const addSignature = (event) => {
  event.preventDefault();
  let name = document.getElementById("name");
  let hometown = document.getElementById("hometown");

  const newSignature = document.createElement('p');
  newSignature.innerText = `🖊️ ${name.value} from ${hometown.value} supports this.`
  signaturesDiv.appendChild(newSignature);

  let counter = document.getElementById("counter");
  counter.remove();
  count = count + 1;
  const newCounter = document.createElement('p');
  newCounter.setAttribute("id", "counter");
  newCounter.innerText = `️ 🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesDiv.appendChild(newCounter);
}

signNowButton.addEventListener('click', addSignature);

let count = 3;