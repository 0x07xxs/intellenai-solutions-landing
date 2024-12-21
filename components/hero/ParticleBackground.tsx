'use client';

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      opacity: number;
    }> = [];

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    const mouseTrail: Array<{ x: number; y: number; age: number }> = [];
    const maxTrailLength = 20;

    // Create particles with random directions
    for (let i = 0; i < 1200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 0.7; // Slower speed between 0.2 and 0.4
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 0.9 + 1, // Size between 0.5 and 0.8
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        opacity: 0.8,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newMouseX = e.clientX - rect.left;
      const newMouseY = e.clientY - rect.top;
      
      // Add point to mouse trail
      mouseTrail.push({ x: newMouseX, y: newMouseY, age: 0 });
      if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
      }
      
      mouseX = newMouseX;
      mouseY = newMouseY;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw mouse trail
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        mouseTrail[i].age++;
        if (mouseTrail[i].age > 50) { // Trail point lifetime
          mouseTrail.splice(i, 1);
          continue;
        }
      }

      particles.forEach(particle => {
        // Find the nearest trail point
        let nearestDist = Infinity;
        let nearestPoint = null;
        
        for (const point of mouseTrail) {
          const dx = point.x - particle.x;
          const dy = point.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < nearestDist) {
            nearestDist = distance;
            nearestPoint = point;
          }
        }

        // If there's a nearby trail point, influence the particle
        if (nearestPoint && nearestDist < 120) {
          const influence = (120 - nearestDist) / 120;
          const trailAge = nearestPoint.age / 50; // Normalize age
          const strengthMultiplier = 1 - trailAge; // Older points have less influence
          
          const dx = nearestPoint.x - particle.x;
          const dy = nearestPoint.y - particle.y;
          
          // Gentle attraction towards trail point
          particle.dx += (dx / nearestDist) * 0.05 * influence * strengthMultiplier;
          particle.dy += (dy / nearestDist) * 0.05 * influence * strengthMultiplier;
          
          // Increase opacity when near trail
          particle.opacity = Math.min(0.8, 0.4 + influence * 0.4);
        } else {
          // Gradually return to normal opacity
          particle.opacity = Math.max(0.4, particle.opacity - 0.01);
        }

        // Dampen velocity
        particle.dx *= 0.70;
        particle.dy *= 0.70;

        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(48, 100, 250, ${particle.opacity})`;
        ctx.fill();
      });
    };

    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1]"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;