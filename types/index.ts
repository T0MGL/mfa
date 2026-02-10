// Common types used across the application

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  type?: "spring" | "tween" | "inertia";
  stiffness?: number;
  damping?: number;
}

export interface ScrollConfig {
  duration: number;
  easing: (t: number) => number;
  orientation: "vertical" | "horizontal";
  gestureOrientation: "vertical" | "horizontal" | "both";
  smoothWheel: boolean;
  wheelMultiplier: number;
  smoothTouch: boolean;
  touchMultiplier: number;
  infinite: boolean;
}

export interface ShaderUniforms {
  u_time: { value: number };
  u_resolution: { value: THREE.Vector2 };
  u_color: { value: THREE.Color };
}
