import { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.8 - 0.2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 60 + 10, // Orange to pink range
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.opacity})`;
        ctx.fill();

        // Add glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-spark-orange/20 via-spark-pink/10 to-transparent blur-3xl animate-glow-pulse" />
      <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-spark-purple/20 via-spark-blue/10 to-transparent blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-radial from-spark-pink/15 via-spark-purple/5 to-transparent blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Spark streaks */}
      <div className="absolute top-1/4 left-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-spark-orange to-transparent opacity-30 animate-spark-streak" />
      <div className="absolute top-1/2 left-0 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-spark-pink to-transparent opacity-20 animate-spark-streak" style={{ animationDelay: '3s' }} />
      <div className="absolute top-3/4 left-0 w-[180px] h-[1px] bg-gradient-to-r from-transparent via-spark-purple to-transparent opacity-25 animate-spark-streak" style={{ animationDelay: '5s' }} />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default HeroBackground;
