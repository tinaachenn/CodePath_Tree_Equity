//Dark Mode
const themeButton = document.getElementById("theme-button");
const aboutDiv = document.getElementById("about-div");
const DataDiv = document.getElementById("data-div");
const DataWhy = document.getElementById("data-why");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // aboutDiv.classList.toggle("dark-mode");
  DataDiv.classList.toggle("dark-mode");
  DataWhy.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

let count = 3;
const signNowButton = document.getElementById("sign-now-button");
const signaturesDiv = document.querySelector('.signatures');
let scaleFactor = 1;
const modalImage = document.getElementById("modal-image");
const modalButton = document.getElementById("modalButton");

// const addSignature = (person) => {
//   // event.preventDefault();
//   // let name = document.getElementById("name");
//   // let hometown = document.getElementById("hometown");

//   const newSignature = document.createElement('p');
//   newSignature.innerText = `🖊️ ${person.name} from ${person.hometown} supports this.`;
//   signaturesDiv.appendChild(newSignature);

//   let counter = document.getElementById("counter");
//   counter.remove();
//   count = count + 1;
//   const newCounter = document.createElement('p');
//   newCounter.setAttribute("id", "counter");
//   newCounter.innerText = `️ 🖊️ ${count} people have signed this petition and support this cause.`;
//   signaturesDiv.appendChild(newCounter);
// }

//stops listing all the signatures after a certain count and just updates the total count
const addSignature = (person) => {
  // event.preventDefault();

  if (count < 5) {
    const newSignature = document.createElement('p');
    newSignature.innerText = `🖊️ ${person.name} from ${person.hometown} supports this.`
    signaturesDiv.appendChild(newSignature);
    console.log("in count");

    let counter = document.getElementById("counter");
    counter.remove();
    count = count + 1;
    const newCounter = document.createElement('p');
    newCounter.setAttribute("id", "counter");
    newCounter.innerText = `️ 🖊️ ${count} people have signed this petition and support this cause.`;
    signaturesDiv.appendChild(newCounter);
  } else {
    counter.remove();
    count = count + 1;
    const newCounter = document.createElement('p');
    newCounter.setAttribute("id", "counter");
    newCounter.innerText = `️ 🖊️ ${count} people have signed this petition and support this cause.`;
    signaturesDiv.appendChild(newCounter);
  }
}

//toggle modal
const toggleModal = (person) => {
  const intervalId =  setInterval(scaleImage, 500);
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('modal-text-container-p');
  modal.style.display = "flex";
  console.log(person.name);
  modalContent.textContent = `Thank you for signing this petition, ${person.name}! Your city of ${person.hometown} appreciates your support.`;
  setTimeout(() => {
    const modal = document.getElementById('thanks-modal');
    modal.style.display = "none";
    console.log("in settimeout");
    clearInterval(intervalId);
  }, 4000)
}

//scale image in modal
const scaleImage = () => {
  //ternary operator
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// modalButton.addEventListener("click", closeModal);

// const closeModal = () => {
//   const modal = document.getElementById('thanks-modal');
//   modal.style.display = "none";
// }

//verifies that form inputs are larger than 2 characters
const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  };

  // loops through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // validates the value of each input
    console.log(petitionInputs[i].value);
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
  if (!email.value.includes('.com') && !email.value.includes('.edu') && !email.value.includes('.net') &&
    !email.value.includes('.org') && !email.value.includes('.gov')) {
    containsErrors = true;
    email.classList.add('error');
    console.log("error");
  } else {
    email.classList.remove('error');
  }

  // calls addSignature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
      console.log("remove error");
    }
  }
}

signNowButton.addEventListener('click', validateForm);

//js for animation + fade in
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

const headerDonate = document.getElementById("header-donate");
const headerTakeAction = document.getElementById("header-action");


const headerActionBtn = () => {
  window.open('https://www.americanforests.org/take-action/', '_blank');
}
headerTakeAction.addEventListener("click", headerActionBtn);

const headerDonateBtn = () => {
  window.open('https://www.americanforests.org/ways-to-give/', '_blank');
}
headerDonate.addEventListener("click", headerDonateBtn);