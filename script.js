// Typewriter Text for All Friends
const message = "Happy Friendship Day to All My Friends ❤️";
let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Fireworks Canvas Effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFirework(x, y) {
  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    let life = 50;
    function animate() {
      if (life-- <= 0) return;
      ctx.beginPath();
      ctx.arc(x + dx * life, y + dy * life, 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      requestAnimationFrame(animate);
    }
    animate();
  }
}
setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  drawFirework(x, y);
}, 800);