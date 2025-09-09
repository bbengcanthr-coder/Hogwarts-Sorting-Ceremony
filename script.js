const houses = [
  { name: "Gryffindor 🦁", color: "crimson" },
  { name: "Slytherin 🐍", color: "green" },
  { name: "Ravenclaw 🦅", color: "royalblue" },
  { name: "Hufflepuff 🦡", color: "gold" }
];

const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
const bgMusic = document.getElementById("bg-music");
const magicSound = document.getElementById("magic-sound");

startBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter your name first!");
    return;
  }

  bgMusic.play();
  magicSound.play();
  
  const house = houses[Math.floor(Math.random() * houses.length)];
  result.textContent = `✨ ${username}, you belong to ${house.name}! ✨`;
  result.style.color = house.color;
  result.classList.remove("hidden");

  document.body.style.animation = "flash 1s ease";
  setTimeout(() => document.body.style.animation = "", 1000);
});

// โหลด particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});
