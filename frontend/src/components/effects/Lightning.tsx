"use client";

import React, { useEffect, useRef } from "react";
import "./Lightning.css";

interface LightningProps {
  intensity?: number;
}

export const Lightning: React.FC<LightningProps> = ({ intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    class Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.maxLife = Math.random() * 40 * intensity + 10;
        this.life = this.maxLife;
        this.size = Math.random() * 2 + 0.5;
        // Lime green colors for the Skitbit style
        this.color = `rgba(163, 230, 53, ${Math.random()})`; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    let sparks: Spark[] = [];
    let time = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.2)"; // Dark trail effect
      ctx.fillRect(0, 0, width, height);

      time++;

      // Create lightning bursts occasionally
      if (Math.random() < 0.05 * intensity) {
        const startX = Math.random() * width;
        const startY = Math.random() * height * 0.5; // Mostly from the top
        for (let i = 0; i < 15; i++) {
          sparks.push(new Spark(startX, startY));
        }
      }

      // Draw lightning bolts (procedural lines)
      if (Math.random() < 0.02 * intensity) {
        let x = Math.random() * width;
        let y = 0;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = "rgba(190, 242, 100, 0.8)"; // Lime-300
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#84cc16";

        while (y < height) {
          x += (Math.random() - 0.5) * 100;
          y += Math.random() * 50;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      sparks.forEach((spark, index) => {
        spark.update();
        spark.draw(ctx);
        if (spark.life <= 0) sparks.splice(index, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity]);

  return (
    <div className="lightning-container absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-60 mix-blend-screen" />
    </div>
  );
};
