const celebrateBtn = document.getElementById("celebrateButton");
const music = document.getElementById("birthdayMusic");
const popSound = document.getElementById("confettiSound");

celebrateBtn.addEventListener("click", () => {
  // Mainkan musik piano
  music.play().catch(() => {
    alert("Aktifkan audio agar musik bisa diputar 🎵");
  });

  // Bunyi confetti pop
  popSound.currentTime = 0;
  popSound.play();

  // Efek confetti terbang dari kiri & kanan
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 120,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#ff5b5b', '#ffd166', '#06d6a0', '#118ab2', '#fcbf49']
      });
    }, i * 400);
  }

  // Efek teks bersinar
  document.querySelector(".title").classList.add("glow");
});

// Tambahkan animasi glow ke teks
const style = document.createElement("style");
style.textContent = `
  .glow {
    text-shadow: 0 0 10px #ff8fa3, 0 0 20px #ff5b5b, 0 0 30px #ffb6b9;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;
document.head.appendChild(style);


