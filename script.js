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
  bgMusic.play();
  magicSound.play();
  
  const house = houses[Math.floor(Math.random() * houses.length)];
  result.textContent = `You belong to ${house.name}!`;
  result.style.color = house.color;
  result.classList.remove("hidden");
  
  // เอฟเฟกต์ประกายแสง
  document.body.style.animation = "flash 1s ease";
  setTimeout(() => document.body.style.animation = "", 1000);
});
