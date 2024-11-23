import { Particle, TrailParticle, ShootingStar } from './types';

export class CanvasAnimation {
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private trailParticles: TrailParticle[] = [];
  private shootingStar: ShootingStar;
  private animationFrame: number | null = null;
  private shootingStarInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private canvas: HTMLCanvasElement, private isDarkMode: boolean = false) {
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get canvas context');
    this.ctx = context;

    this.shootingStar = {
      active: false,
      x: 0,
      y: 0,
      speedX: 0,
      speedY: 0,
      size: 6,
      rotation: 0
    };

    this.initializeParticles();
    this.startAnimation();
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.updateAndDrawParticles();
    this.updateAndDrawTrails();
    this.updateAndDrawShootingStar();

    this.animationFrame = requestAnimationFrame(this.animate);
  }

  private updateAndDrawParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.hue += particle.hueSpeed;

      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.y > this.canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = this.canvas.height;

      const gradient = this.ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size
      );

      const baseHue = 222 + particle.hue; // Keep primary blue color
      const lightness = this.isDarkMode ? '50%' : '40%';
      const saturation = this.isDarkMode ? '100%' : '100%';
      
      gradient.addColorStop(0, `hsla(${baseHue}, ${saturation}, ${lightness}, ${particle.opacity})`);
      gradient.addColorStop(1, `hsla(${baseHue}, ${saturation}, ${lightness}, 0)`);

      this.ctx.beginPath();
      this.ctx.fillStyle = gradient;
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private updateAndDrawTrails() {
    for (let i = this.trailParticles.length - 1; i >= 0; i--) {
      const trail = this.trailParticles[i];
      trail.opacity -= 0.02;
      
      if (trail.opacity <= 0) {
        this.trailParticles.splice(i, 1);
        continue;
      }

      const gradient = this.ctx.createRadialGradient(
        trail.x, trail.y, 0,
        trail.x, trail.y, trail.size
      );

      // Use primary blue color for light mode trails
      const hue = this.isDarkMode ? 45 : 222;
      const lightness = this.isDarkMode ? '70%' : '40%';
      const saturation = this.isDarkMode ? '100%' : '100%';

      gradient.addColorStop(0, `hsla(${hue}, ${saturation}, ${lightness}, ${trail.opacity})`);
      gradient.addColorStop(1, `hsla(${hue}, ${saturation}, ${lightness}, 0)`);

      this.ctx.beginPath();
      this.ctx.fillStyle = gradient;
      this.ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  private updateAndDrawShootingStar() {
    if (this.shootingStar.active) {
      this.shootingStar.x += this.shootingStar.speedX;
      this.shootingStar.y += this.shootingStar.speedY;
      this.shootingStar.rotation += 0.1;

      this.trailParticles.push({
        x: this.shootingStar.x,
        y: this.shootingStar.y,
        size: Math.random() * 2 + 1,
        opacity: 0.8,
        hue: 45
      });

      this.drawStar(this.shootingStar.x, this.shootingStar.y, this.shootingStar.size);

      if (this.shootingStar.x > this.canvas.width + 50 || this.shootingStar.y > this.canvas.height + 50) {
        this.shootingStar.active = false;
      }
    }
  }

  private initializeParticles() {
    const numParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
    for (let i = 0; i < numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.5,
        hue: Math.random() * 30,
        hueSpeed: Math.random() * 0.2 - 0.1
      });
    }
  }

  private createShootingStar() {
    if (!this.shootingStar.active) {
      const startX = -50;
      const startY = Math.random() * (this.canvas.height / 2);
      const angle = Math.random() * Math.PI / 4 + Math.PI / 8;
      const speed = 15;

      this.shootingStar = {
        active: true,
        x: startX,
        y: startY,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        size: 6,
        rotation: 0
      };
    }
  }

  private drawStar(x: number, y: number, size: number) {
    const spikes = 5;
    const outerRadius = size;
    const innerRadius = size / 2;
    
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(Math.PI / 2);
    
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes;
      if (i === 0) {
        this.ctx.moveTo(radius * Math.cos(angle), radius * Math.sin(angle));
      } else {
        this.ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
      }
    }
    
    this.ctx.closePath();
    
    // Use primary blue for light mode stars
    const fillColor = this.isDarkMode 
      ? 'rgba(255, 255, 220, 0.9)'
      : 'rgba(0, 100, 255, 0.9)';
    const glowColor = this.isDarkMode
      ? 'rgba(255, 255, 200, 0.8)'
      : 'rgba(0, 100, 255, 0.8)';
    
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius);
    gradient.addColorStop(0, fillColor);
    gradient.addColorStop(0.5, fillColor.replace('0.9', '0.7'));
    gradient.addColorStop(1, fillColor.replace('0.9', '0'));
    
    this.ctx.fillStyle = gradient;
    this.ctx.shadowColor = glowColor;
    this.ctx.shadowBlur = size * 2;
    this.ctx.fill();
    
    this.ctx.restore();
  }

  public startAnimation() {
    if (this.animationFrame === null) {
      this.animate();
    }
    if (this.shootingStarInterval === null) {
      this.shootingStarInterval = setInterval(() => this.createShootingStar(), 5000);
    }
  }

  public stopAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    if (this.shootingStarInterval) {
      clearInterval(this.shootingStarInterval);
    }
  }

  public handleResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}
