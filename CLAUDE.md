# Project Context: Mercosur First Agency

## Overview
Premium digital agency website with high-performance animations and smooth user experience. Focus on 60fps consistency and GPU-accelerated effects.

## Tech Stack Philosophy
- **Next.js 15** with App Router for modern React patterns
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with 16 custom animation keyframes for quick styling
- **Animation-first approach**: Every interaction should feel smooth and intentional

## Animation Architecture

### 1. Framer Motion (Component Animations)
- Use for page transitions, component mount/unmount
- Prefer `spring` type animations over `tween` for natural feel
- Default spring config: `{ type: "spring", stiffness: 100-120 }`
- Use `initial`, `animate`, and `exit` props consistently

### 2. Lenis (Smooth Scroll)
- Configured globally in `SmoothScrollProvider`
- Duration: 1.2s with custom easing
- Runs in requestAnimationFrame loop for 60fps
- Do not add multiple scroll handlers - Lenis handles all

### 3. Three.js (WebGL Effects)
- Used for background shader animations
- Always optimize: `setPixelRatio(Math.min(window.devicePixelRatio, 2))`
- Clean up resources in useEffect return (dispose geometry, material, renderer)
- Lime green theme: `#84cc16` (lime-500)

### 4. Tailwind Animations
- 16 custom keyframes available (see tailwind.config.ts)
- Use for simple effects: hover states, loading indicators
- Combine with Framer Motion for complex sequences

## Design System

### Colors
- **Primary**: Lime green (`#84cc16`, lime-500)
- **Background**: Dark (`#0a0a0a`)
- **Text**: Light gray (`#ededed`)
- **Accents**: Emerald (`emerald-400`)

### Typography
- Headings: Bold, large (6xl-8xl on desktop)
- Body: 1xl-2xl for readability
- Use gradient text for emphasis: `bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text`

### Spacing
- Generous padding: minimum 6 units (24px)
- Use `min-h-screen` for full-height sections
- Mobile-first responsive design

## File Organization

### Components
- `/components/effects/` - Visual effects (Three.js, particles)
- `/components/providers/` - Context providers (Lenis, theme)
- `/components/ui/` - Reusable UI components (buttons, cards)

### App Directory
- Each route in `/app/` should have its own folder
- Use `loading.tsx` for loading states
- Use `error.tsx` for error boundaries

## Performance Guidelines

1. **60fps Target**: Every animation must maintain 60fps
   - Use GPU: `transform`, `opacity` (not `left`, `top`, `width`)
   - Avoid layout shifts: set dimensions explicitly
   - Use `will-change` sparingly (only during animation)

2. **Bundle Size**
   - Lazy load heavy components: `const Component = dynamic(() => import('./Component'))`
   - Use Three.js selectively, not on every page
   - Images: use Next.js `<Image>` component with proper sizes

3. **Smooth Scroll**
   - Let Lenis handle all scrolling
   - For scroll-triggered animations, use Framer Motion's `useScroll` hook
   - Avoid `window.scrollTo()` - use Lenis methods

## Common Patterns

### Animated Page Entry
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
>
  {/* content */}
</motion.div>
```

### Button with Hover Effect
```tsx
<button className="group relative overflow-hidden ...">
  <span className="relative z-10">Text</span>
  <div className="absolute inset-0 bg-gradient-to-r ... opacity-0 transition-opacity group-hover:opacity-100" />
</button>
```

### Shader Background Setup
- See `ShaderBackground.tsx` for reference
- Always clean up in useEffect return
- Use `requestAnimationFrame` for smooth updates

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Check animations**: Open DevTools Performance tab
3. **Monitor FPS**: Should stay at 60fps during scroll/animations
4. **Mobile testing**: Always test on real devices

## Deployment Considerations

- Build with `npm run build` before deploying
- Check bundle size: `npm run build` shows size report
- Optimize images before adding to project
- Test production build locally: `npm run start`

## Notes
- This is a premium agency site - every detail matters
- Smooth > Fast: Better to have slower, smooth animations than fast, janky ones
- User experience first: animations should enhance, not distract
- Keep it simple: Don't over-animate
