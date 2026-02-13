"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Shader material with concentric circles in gold
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        u_color: { value: new THREE.Color(0xc9a96e) }, // gold
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec3 u_color;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= u_resolution.x / u_resolution.y;

          float dist = length(uv);

          // Concentric circles animation
          float circles = sin(dist * 10.0 - u_time * 0.5) * 0.5 + 0.5;
          circles *= smoothstep(2.0, 0.0, dist);

          // Multiple circle layers
          float layer1 = sin(dist * 8.0 - u_time * 0.3) * 0.5 + 0.5;
          float layer2 = sin(dist * 15.0 + u_time * 0.4) * 0.5 + 0.5;

          float pattern = (circles + layer1 * 0.5 + layer2 * 0.3) / 2.0;

          // Fade out at edges
          pattern *= smoothstep(1.5, 0.0, dist);

          // Apply gold color with varying alpha
          vec3 color = u_color * pattern;
          float alpha = pattern * 0.15; // Subtle background effect

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    });

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop - 60fps guaranteed
    const clock = new THREE.Clock();
    function animate() {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.u_time.value = elapsedTime;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      material.uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
}
