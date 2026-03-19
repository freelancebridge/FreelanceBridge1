"use client";

import React, { useEffect, useRef } from 'react';

type NodeType = 'freelancer' | 'client';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: NodeType;
  color: string;
  hasAvatar: boolean;
  initials: string;
}

const INITIALS = ["JD", "AR", "MK", "SL", "TB", "JS", "CW", "ML", "PT", "NK", "EF", "GH", "AL"];

export default function Network() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];

    const initNodes = (width: number, height: number) => {
      nodes = [];
      const numNodes = 20;
      for (let i = 0; i < numNodes; i++) {
        const type: NodeType = Math.random() > 0.5 ? 'freelancer' : 'client';
        const color = type === 'freelancer' ? '#a855f7' : '#f97316';
        const hasAvatar = Math.random() > 0.7;
        
        nodes.push({
          x: Math.random() * (width - 100) + 50,
          y: Math.random() * (height - 100) + 50,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: hasAvatar ? 14 : 4 + Math.random() * 3,
          type,
          color,
          hasAvatar,
          initials: INITIALS[Math.floor(Math.random() * INITIALS.length)]
        });
      }
    };

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        // Use EXACT physical bounds
        const dpr = window.devicePixelRatio || 1;
        
        const offsetW = canvas.offsetWidth;
        const offsetH = canvas.offsetHeight;
        
        canvas.width = offsetW * dpr;
        canvas.height = offsetH * dpr;
        
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        
        if (nodes.length === 0) {
          initNodes(offsetW, offsetH);
        }
      }
    };

    // Use ResizeObserver as explicitly requested
    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
    observer.observe(canvas);
    resizeCanvas();

    const draw = () => {
      if (!ctx || !canvas) return;
      
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      // Clip explicitly rendering logic
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.clip();

      // Update positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce strictly at the edge based on user explicitly provided code
        if (node.x < node.radius) { node.x = node.radius; node.vx *= -1; }
        if (node.x > width - node.radius) { node.x = width - node.radius; node.vx *= -1; }
        if (node.y < node.radius) { node.y = node.radius; node.vy *= -1; }
        if (node.y > height - node.radius) { node.y = height - node.radius; node.vy *= -1; }
      });

      // Draw lines between nearby nodes
      const connectionDistance = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - Math.pow(dist / connectionDistance, 2);
            
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            
            const hexToRgba = (hex: string, alpha: number) => {
              const r = parseInt(hex.slice(1, 3), 16);
              const g = parseInt(hex.slice(3, 5), 16);
              const b = parseInt(hex.slice(5, 7), 16);
              return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };

            const lineOpacity = opacity * 0.5;
            gradient.addColorStop(0, hexToRgba(nodes[i].color, lineOpacity));
            gradient.addColorStop(1, hexToRgba(nodes[j].color, lineOpacity));

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.shadowBlur = node.hasAvatar ? 20 : 12;
        ctx.shadowColor = node.color;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        
        if (node.hasAvatar) {
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          ctx.fill();
        }
        
        ctx.shadowBlur = 0;

        if (node.hasAvatar) {
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px Inter, system-ui, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.initials, node.x, node.y + 1);
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      style={{ overflow: 'hidden', borderRadius: 'inherit' }}
    >
      <div className="absolute w-80 h-80 rounded-full bg-orange-500/10 blur-[80px] pointer-events-none z-0"></div>
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))' 
        }}
      />
    </div>
  );
}
