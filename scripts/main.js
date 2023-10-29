//Dark Mode
let themeButton = document.getElementById("theme-button");
// let footer = document.getElementById("footer");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // footer.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

//adding signatures function
let count = 3;
const signNowButton = document.getElementById("sign-now-button");
const signaturesDiv = document.querySelector('.signatures');

const addSignature = (event) => {
  // event.preventDefault();
  let name = document.getElementById("name");
  let hometown = document.getElementById("hometown");

  if (count < 5) {
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
  }else{
    counter.remove();
    count = count + 1;
    const newCounter = document.createElement('p');
    newCounter.setAttribute("id", "counter");
    newCounter.innerText = `️ 🖊️ ${count} people have signed this petition and support this cause.`;
    signaturesDiv.appendChild(newCounter);
  }
}

const validateForm = () => {

  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // TODO: Validate the value of each input
    console.log(petitionInputs[i]);
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
      console.log("error");
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // Checking for valid email input
  const email = document.getElementById('email');
  if (!email.value.includes('.com') && !email.value.includes('.edu') && !email.value.includes('.net') && !email.value.includes('.org') && !email.value.includes('.gov')) {
    containsErrors = true;
    email.classList.add('error');
    console.log("error");
  } else {
    email.classList.remove('error');
  }

  // TODO: Call addSignature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
      console.log("remove error");
    }
  }
}

signNowButton.addEventListener('click', validateForm);