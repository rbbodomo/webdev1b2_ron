// typewriter animation
const words = ["Welcome to my website!", "I am Ron, a fresh graduate..", "pursuing a career in software."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    if(currentWord[j+1] == '&'){
        document.getElementById("typewriter").textContent = currentWord.substring(0, j+10);
    } else {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    }
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  if (j == currentWord.length){
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
  
}

type();

// for tab_comp responsiveness
window.addEventListener('load', function() {
  if (window.innerWidth < 1100) {
      document.getElementById('tab_comp').classList.add('flex-col');
  } else {
      document.getElementById('tab_comp').classList.remove('flex-col');
      document.getElementById('tab_comp').classList.remove('flex');
      document.getElementById('tab_comp').classList.add('flex');  
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth < 1100) {
      document.getElementById('tab_comp').classList.add('flex-col');
  } else {
      document.getElementById('tab_comp').classList.remove('flex-col');
      document.getElementById('tab_comp').classList.remove('flex');
      document.getElementById('tab_comp').classList.add('flex');  
  }
});

// for tab animation when scrolled to about section
const tabs = document.querySelectorAll('.tabs'); 

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const tab_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up'); // Add the animation class
    }
  });
}, options);

tabs.forEach(tab => {
  tab_observer.observe(tab);
});

// for card animation when scrolled to project section
const cards = document.querySelectorAll('#cards'); 

const card_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up'); // Add the animation class
    }
  });
}, options);

cards.forEach(card => {
  card_observer.observe(card);
});



// for terms and conditions

// modal and close button elements
var modal = document.getElementById("termsModal");
var closeModal = document.getElementById("closeModal");

// link to open the modal
var termsLink = document.getElementById("termsLink");

// show modal when term link clicked
termsLink.addEventListener("click", function() {
  modal.style.display = "block";
});

// hide modal when close button clicked
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// hide modal when outside clicked
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Dark Mode Switch
// const darkModeSwitch = document.getElementById("dark-mode-switch");
// const darkModeSlider = document.getElementById("dark-mode-slider");
// get switch
const darkModeSwitch = document.getElementById("switch-component");
// get home for bg change
const homeElement = document.getElementById('home');

// Check the user's preference for dark mode
if (localStorage.getItem("darkMode") === "enabled") {
  document.documentElement.classList.add("dark");
  homeElement.classList.remove('bg-image-light');
  homeElement.classList.add('bg-image-dark');
  darkModeSwitch.checked = true;
  //darkModeSlider.style.transform = "translateX(100%)";
}

// Toggle dark mode on switch change
darkModeSwitch.addEventListener("change", () => {
  if (darkModeSwitch.checked) {
    document.documentElement.classList.add("dark");
    homeElement.classList.remove('bg-image-light');
    homeElement.classList.add('bg-image-dark');
    localStorage.setItem("darkMode", "enabled");
    darkModeSlider.style.transform = "translateX(100%)";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
    homeElement.classList.remove('bg-image-dark');
    homeElement.classList.add('bg-image-light');
    localStorage.setItem("darkMode", "disabled");
    darkModeSlider.style.transform = "translateX(0)";
  }
});