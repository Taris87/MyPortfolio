export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  hueSpeed: number;
}

export interface TrailParticle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  hue: number;
}

export interface ShootingStar {
  active: boolean;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  rotation: number;
}
