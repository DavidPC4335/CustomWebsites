import React, { useEffect, useRef } from 'react';

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple black background canvas for now
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add some simple animated stars
        const stars: { x: number; y: number; opacity: number }[] = [];
        for (let i = 0; i < 100; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            opacity: Math.random()
          });
        }
        
        const animate = () => {
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          stars.forEach(star => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI);
            ctx.fill();
            
            star.opacity += (Math.random() - 0.5) * 0.02;
            if (star.opacity > 1) star.opacity = 1;
            if (star.opacity < 0) star.opacity = 0;
          });
          
          requestAnimationFrame(animate);
        };
        
        animate();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="c"
      style={{
        backgroundColor: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100vh'
      }}
    />
  );
};

export default ThreeBackground; 