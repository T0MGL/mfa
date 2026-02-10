# Mercosur First Agency

Premium digital experiences with smooth 60fps animations.

## Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS with 16 custom animation keyframes

### Animation Libraries
- **Framer Motion 12.26** - Declarative animations with spring physics
- **Lenis 1.3** - Ultra-smooth scroll interpolation
- **Three.js 0.180** - WebGL shader animations (GPU accelerated)
- **React Confetti 6.4** - Particle effects

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── effects/           # Visual effects (Three.js, etc.)
│   └── providers/         # Context providers (Lenis, etc.)
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── public/                # Static assets

## Animation Features

### Custom Tailwind Keyframes
16 professional animation keyframes configured in `tailwind.config.ts`:
- **Fade**: fade-in, fade-up, fade-down
- **Scale**: scale-in, scale-out
- **Slide**: slide-in-right, slide-in-left
- **Effects**: glow, shimmer, float, gradient-shift, beam, aurora
- **Motion**: bounce-subtle, wiggle, pulse, ping

### Smooth Scroll (Lenis)
Configured in `SmoothScrollProvider.tsx` with:
- 1.2s duration
- Custom easing function
- requestAnimationFrame loop for 60fps

### WebGL Background
Shader-based concentric circles in lime green:
- GPU accelerated
- 60fps guaranteed
- Responsive and performant

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- [Three.js](https://threejs.org/)
