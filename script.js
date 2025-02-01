// Simulate loading delay (replace with actual loading logic if needed)
setTimeout(() => {
  // Hide the loading screen
  document.getElementById("loadingScreen").style.display = "none";
  // Show the main page
  document.getElementById("mainPage").style.display = "block";
}, 6000); // 6 seconds delay for demonstration

let noCount = 0;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const gifContainer = document.getElementById("gifContainer");
const heartContainer = document.getElementById("heartContainer");
const mainPage = document.getElementById("mainPage"); // Main page container
const finalConfirmation = document.getElementById("finalConfirmation"); // Pop-up container
const thankYouNoPage = document.getElementById("thankYouNoPage"); // Thank you page for "No"
const thankYouYesPage = document.getElementById("thankYouYesPage"); // Thank you page for "Yes"
const finalYesBtn = document.getElementById("finalYesBtn"); // Final "Yes" button
const finalNoBtn = document.getElementById("finalNoBtn"); // Final "No" button

// Array of cute GIF URLs
const gifs = [
  "https://media.giphy.com/media/9QrNWBKvBpCw0/giphy.gif?cid=790b7611ehlfyj9xkm4xwsm9e1mmf7vg7owgec800q163iwf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/xUA7aYtwwIjmCa8JzO/giphy.gif?cid=790b7611ehlfyj9xkm4xwsm9e1mmf7vg7owgec800q163iwf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/UUl1QKLLP6nmqGS9CX/giphy.gif?cid=790b7611ehlfyj9xkm4xwsm9e1mmf7vg7owgec800q163iwf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/FyKfqRxVbzciY/giphy.gif?cid=790b7611ehlfyj9xkm4xwsm9e1mmf7vg7owgec800q163iwf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWhsZnlqOXhrbTR4d3NtOWUxbW1mN3ZnN293Z2VjODAwcTE2M2l3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2aw9gwZlltbdX92b4w/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWhsZnlqOXhrbTR4d3NtOWUxbW1mN3ZnN293Z2VjODAwcTE2M2l3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Pq5tRfjF4xEPdm5PHF/giphy.gif",
];

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Add SVG heart shape
  heart.innerHTML = `
    <svg viewBox="0 0 32 29.6">
      <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
  `;

  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  heart.style.animationDuration = `${Math.random() * 4 + 3}s`; // Random animation speed
  heartContainer.appendChild(heart);

  // Remove the heart after the animation ends
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Add hearts periodically
setInterval(createHeart, 500);

noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount < 5) {
    message.textContent = "Are you sure? Please think again!";
  } else if (noCount === 5) {
    // Show the final confirmation pop-up
    mainPage.style.display = "none";
    finalConfirmation.style.display = "flex";
  }

  // Add a random GIF to the container
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  const gifElement = document.createElement("img");
  gifElement.src = randomGif;
  gifElement.classList.add("gif");
  gifElement.style.left = `${Math.random() * 80}%`; // Random horizontal position
  gifElement.style.top = `${Math.random() * 80}%`; // Random vertical position
  gifContainer.appendChild(gifElement);

  // Remove the GIF after 5 seconds
  setTimeout(() => {
    gifElement.remove();
  }, 5000);
});

yesBtn.addEventListener("click", () => {
  // Trigger confetti animation
  confetti({
    particleCount: 100, // Number of confetti particles
    spread: 70, // Spread of the confetti
    origin: { y: 0.6 }, // Origin of the confetti (relative to the button)
  });

  // Optional: Add more confetti bursts for a celebratory effect
  setTimeout(() => confetti({ particleCount: 50, spread: 100 }), 500);
  setTimeout(() => confetti({ particleCount: 50, spread: 100 }), 1000);

  // Hide the main page and show the thank-you page for "Yes"
  mainPage.style.display = "none";
  thankYouYesPage.style.display = "block";
});

finalYesBtn.addEventListener("click", () => {
  // Hide the pop-up and show the thank-you page for "Yes"
  finalConfirmation.style.display = "none";
  thankYouYesPage.style.display = "block";
});

finalNoBtn.addEventListener("click", () => {
  // Hide the pop-up and show the thank-you page for "No"
  finalConfirmation.style.display = "none";
  thankYouNoPage.style.display = "block";
});