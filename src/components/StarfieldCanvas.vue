<template>
  <canvas id="starfield" ref="canvas"></canvas>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const canvas = ref(null);
let ctx = null;
let frameId = 0;

let W = 0;
let H = 0;
let stars = [];
let meteors = [];
let particles = [];
let t = 0;
let mouseX = 0;
let mouseY = 0;

function resize() {
  if (!canvas.value) return;
  W = canvas.value.width = window.innerWidth;
  H = canvas.value.height = window.innerHeight;
  initOrbits();
}

function initStars() {
  stars = Array.from({ length: 260 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.4 + 0.2,
    alpha: Math.random() * 0.6 + 0.3,
    twinkleSpeed: Math.random() * 0.02 + 0.005,
    phase: Math.random() * Math.PI * 2,
    color: Math.random() > 0.85 ? `rgba(180,160,255,` : Math.random() > 0.7 ? `rgba(160,220,255,` : `rgba(232,234,246,`
  }));
}

const ORBIT_SYSTEMS = [];

function initOrbits() {
  ORBIT_SYSTEMS.length = 0;

  ORBIT_SYSTEMS.push({
    cx: W * 0.12,
    cy: H * 0.22,
    rings: [
      {
        rx: 90,
        ry: 36,
        tilt: -0.3,
        color: '0,245,196',
        particles: buildOrbitParticles(8, 90, 36, -0.3, 0.004)
      },
      {
        rx: 140,
        ry: 56,
        tilt: -0.3,
        color: '0,245,196',
        particles: buildOrbitParticles(5, 140, 56, -0.3, 0.0025)
      },
      {
        rx: 190,
        ry: 78,
        tilt: -0.3,
        color: '0,245,196',
        particles: buildOrbitParticles(6, 190, 78, -0.3, 0.002)
      }
    ],
    coreR: 8,
    corePulse: 0
  });

  ORBIT_SYSTEMS.push({
    cx: W * 0.88,
    cy: H * 0.72,
    rings: [
      {
        rx: 70,
        ry: 22,
        tilt: 0.5,
        color: '123,94,167',
        particles: buildOrbitParticles(6, 70, 22, 0.5, 0.006)
      },
      {
        rx: 110,
        ry: 38,
        tilt: 0.5,
        color: '123,94,167',
        particles: buildOrbitParticles(5, 110, 38, 0.5, 0.0045)
      }
    ],
    coreR: 5,
    corePulse: Math.PI
  });

  ORBIT_SYSTEMS.push({
    cx: W * 0.78,
    cy: H * 0.18,
    rings: [
      {
        rx: 50,
        ry: 20,
        tilt: 0.2,
        color: '240,93,94',
        particles: buildOrbitParticles(4, 50, 20, 0.2, 0.009)
      },
      {
        rx: 90,
        ry: 34,
        tilt: 0.2,
        color: '240,93,94',
        particles: buildOrbitParticles(5, 90, 34, 0.2, 0.006)
      }
    ],
    coreR: 4,
    corePulse: Math.PI * 0.7
  });
}

function buildOrbitParticles(count, rx, ry, tilt, speed) {
  return Array.from({ length: count }, (_, i) => ({
    angle: ((Math.PI * 2) / count) * i + Math.random() * 0.5,
    rx,
    ry,
    tilt,
    speed,
    r: Math.random() * 2 + 1,
    trailLen: Math.floor(Math.random() * 18 + 8),
    trail: []
  }));
}

function drawOrbits() {
  if (!ctx) return;
  ORBIT_SYSTEMS.forEach((sys) => {
    sys.corePulse += 0.04;
    const coreGlow = sys.coreR + Math.sin(sys.corePulse) * 2;
    const cg = ctx.createRadialGradient(sys.cx, sys.cy, 0, sys.cx, sys.cy, coreGlow * 4);
    cg.addColorStop(0, 'rgba(0,245,196,0.9)');
    cg.addColorStop(0.4, 'rgba(0,245,196,0.25)');
    cg.addColorStop(1, 'transparent');
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(sys.cx, sys.cy, coreGlow * 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(sys.cx, sys.cy, coreGlow, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,245,196,0.95)';
    ctx.fill();

    sys.rings.forEach((ring) => {
      ctx.save();
      ctx.translate(sys.cx, sys.cy);
      ctx.rotate(ring.tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${ring.color},0.10)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      ring.particles.forEach((p) => {
        p.angle += p.speed;
        const px = sys.cx + Math.cos(p.angle) * p.rx;
        const py = sys.cy + Math.sin(p.angle) * p.ry;
        const trailItem = { x: px, y: py, r: p.r, a: 1 };
        p.trail.unshift(trailItem);
        if (p.trail.length > p.trailLen) p.trail.pop();

        // trail
        p.trail.forEach((tp, index) => {
          const alpha = (1 - index / p.trail.length) * 0.5;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, tp.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,0.95)`;
        ctx.fill();
      });
    });
  });
}

function spawnMeteor() {
  const fromTop = Math.random() > 0.4;
  const x = fromTop ? Math.random() * W : W + 20;
  const y = fromTop ? -20 : Math.random() * H * 0.5;
  const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
  const speed = Math.random() * 9 + 5;

  meteors.push({
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    len: Math.random() * 160 + 60,
    width: Math.random() * 1.5 + 0.5,
    life: 0,
    maxLife: Math.floor(Math.random() * 40 + 30),
    color: Math.random() > 0.6 ? '0,245,196' : Math.random() > 0.5 ? '200,180,255' : '255,255,255',
    sparkle: Math.random() > 0.6
  });
}

function drawMeteors() {
  if (!ctx) return;
  meteors = meteors.filter((m) => m.life < m.maxLife);

  meteors.forEach((m) => {
    m.x += m.vx;
    m.y += m.vy;
    m.life++;

    const prog = m.life / m.maxLife;
    const alpha = prog < 0.15 ? prog / 0.15 : prog > 0.75 ? (1 - prog) / 0.25 : 1;

    const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.len;
    const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.len;
    const mg = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
    mg.addColorStop(0, `rgba(${m.color},${alpha})`);
    mg.addColorStop(0.3, `rgba(${m.color},${alpha * 0.4})`);
    mg.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(tailX, tailY);
    ctx.strokeStyle = mg;
    ctx.lineWidth = m.width;
    ctx.lineCap = 'round';
    ctx.stroke();

    const headG = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 6);
    headG.addColorStop(0, `rgba(${m.color},${alpha})`);
    headG.addColorStop(1, 'transparent');
    ctx.fillStyle = headG;
    ctx.beginPath();
    ctx.arc(m.x, m.y, 6, 0, Math.PI * 2);
    ctx.fill();

    if (m.sparkle && Math.random() > 0.6) {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: m.x,
          y: m.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          r: Math.random() * 1.2 + 0.4,
          life: 0,
          maxLife: Math.floor(Math.random() * 20 + 20),
          color: m.color
        });
      }
    }
  });
}

function drawParticles() {
  if (!ctx) return;
  particles = particles.filter((p) => p.life < p.maxLife);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.96;
    p.vy *= 0.96;
    p.life++;
    const a = (1 - p.life / p.maxLife) * 0.7;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color},${a})`;
    ctx.fill();
  });
}

function draw() {
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);
  t += 0.008;

  const mx = mouseX / W - 0.5;
  const my = mouseY / H - 0.5;

  const nebulae = [
    { fx: 0.12, fy: 0.22, r: 280, c: '0,245,196', baseAlpha: 0.07 },
    { fx: 0.88, fy: 0.72, r: 320, c: '123,94,167', baseAlpha: 0.07 },
    { fx: 0.78, fy: 0.18, r: 200, c: '240,93,94', baseAlpha: 0.05 },
    { fx: 0.45, fy: 0.55, r: 400, c: '30,60,120', baseAlpha: 0.08 },
    { fx: 0.6, fy: 0.85, r: 260, c: '0,245,196', baseAlpha: 0.04 }
  ];

  nebulae.forEach((n) => {
    const nx = W * n.fx + mx * 25;
    const ny = H * n.fy + my * 25;
    const pulse = n.baseAlpha + Math.sin(t + n.fx * 5) * 0.015;
    const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.r);
    g.addColorStop(0, `rgba(${n.c},${pulse})`);
    g.addColorStop(0.5, `rgba(${n.c},${pulse * 0.3})`);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  });

  stars.forEach((s) => {
    s.phase += s.twinkleSpeed;
    const px = s.x + mx * 8;
    const py = s.y + my * 8;
    const a = s.alpha * (0.5 + 0.5 * Math.sin(s.phase));
    ctx.beginPath();
    ctx.arc(px, py, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `${s.color}${a})`;
    ctx.fill();
    if (s.r > 1.2) {
      ctx.beginPath();
      ctx.moveTo(px - s.r * 1.4, py);
      ctx.lineTo(px + s.r * 1.4, py);
      ctx.moveTo(px, py - s.r * 1.4);
      ctx.lineTo(px, py + s.r * 1.4);
      ctx.strokeStyle = `rgba(255,255,255,${a * 0.3})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  });

  drawOrbits();
  drawMeteors();
  drawParticles();

  frameId = requestAnimationFrame(draw);
}

function scheduleMeteor() {
  spawnMeteor();
  setTimeout(scheduleMeteor, Math.random() * 2200 + 300);
}

function meteorBurst() {
  const count = Math.floor(Math.random() * 3 + 3);
  for (let i = 0; i < count; i++) {
    setTimeout(spawnMeteor, i * 80);
  }
  setTimeout(meteorBurst, Math.random() * 8000 + 5000);
}

onMounted(() => {
  if (!canvas.value) return;
  ctx = canvas.value.getContext('2d');
  resize();
  initStars();
  initOrbits();
  draw();
  scheduleMeteor();
  setTimeout(meteorBurst, 2000);

  window.addEventListener('resize', resize);

  const onMouse = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener('mousemove', onMouse);

  onBeforeUnmount(() => {
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMouse);
  });
});
</script>
