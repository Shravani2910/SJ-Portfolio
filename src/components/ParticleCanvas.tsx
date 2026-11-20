import { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
  theme: 'dark' | 'light';
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  isStar: boolean;
  phase: number;
}

export default function ParticleCanvas({ theme }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };

    const darkPalette = ['#245BFF', '#4B7BFF', '#00BFA6', '#E08A4B', '#7C6CE6'];
    const lightPalette = ['#245BFF', '#1D4ED8', '#008F83', '#C97538', '#6D5DD3'];
    const palette = theme === 'dark' ? darkPalette : lightPalette;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const particleCount = Math.min(54, Math.max(26, Math.floor((width * height) / 28000)));
    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const isStar = i % 7 === 0;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: isStar ? 2.8 + Math.random() * 2.2 : 1.3 + Math.random() * 2.1,
        color: palette[i % palette.length],
        alpha: theme === 'dark' ? 0.28 + Math.random() * 0.42 : 0.22 + Math.random() * 0.3,
        isStar,
        phase: Math.random() * Math.PI * 2,
      };
    });

    const drawFourPointStar = (x: number, y: number, r: number, color: string, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y - r * 1.9);
      ctx.quadraticCurveTo(x, y, x + r * 1.9, y);
      ctx.quadraticCurveTo(x, y, x, y + r * 1.9);
      ctx.quadraticCurveTo(x, y, x - r * 1.9, y);
      ctx.quadraticCurveTo(x, y, x, y - r * 1.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const renderFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            const maxDist = 140;
            if (distSq < maxDist * maxDist && distSq > 1) {
              const dist = Math.sqrt(distSq);
              const force = (maxDist - dist) / maxDist;
              p.x += (dx / dist) * force * 0.85;
              p.y += (dy / dist) * force * 0.85;
            }
          }
        }

        const twinkle = prefersReducedMotion
          ? 1
          : 0.72 + 0.28 * Math.sin(time * 0.0014 + p.phase);

        if (p.isStar) {
          drawFourPointStar(p.x, p.y, p.radius, p.color, p.alpha * twinkle);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha * twinkle;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(renderFrame);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    if (prefersReducedMotion) {
      renderFrame(0);
    } else {
      animationFrameId = window.requestAnimationFrame(renderFrame);
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
