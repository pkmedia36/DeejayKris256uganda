
AOS.init({ once: true, easing: 'ease-in-out', duration: 1200 });

// Floating letters animation
const letters = document.querySelectorAll('.hero-title span');
letters.forEach((letter, index) => {
  let offset = 0;
  function floatLetter() {
    offset += 0.05;
    letter.style.transform = `translateY(${Math.sin(offset + index)*5}px)`;
    requestAnimationFrame(floatLetter);
  }
  floatLetter();
});

// Optional: Sparkle effect random positions
const sparkles = document.querySelectorAll('.btn-neon .sparkle');
sparkles.forEach((sparkle) => {
  sparkle.style.setProperty('--i', Math.random());
});





// Floating animation for icons
document.querySelectorAll('.service-icon').forEach((icon, index) => {
  let offset = 0;
  function floatIcon() {
    offset += 0.05;
    icon.style.transform = `translateY(${Math.sin(offset + index)*5}px) scale(1)`;
    requestAnimationFrame(floatIcon);
  }
  floatIcon();
});

// Sparkle random positions
document.querySelectorAll('.icon-wrapper .sparkle').forEach((sparkle) => {
  sparkle.style.setProperty('--i', Math.random());
});



// Sparkle random positions
document.querySelectorAll('.btn-neon .sparkle').forEach((sparkle) => {
  sparkle.style.setProperty('--i', Math.random());
});

// Optional: simple floating particle effect
const canvas = document.getElementById('cta-particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = canvas.offsetHeight;

const particles = [];
for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random()
  });
}

function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = canvas.offsetHeight;
});





