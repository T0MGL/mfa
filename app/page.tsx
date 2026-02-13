"use client";

import { motion } from "framer-motion";
import { ShaderBackground } from "@/components/effects/ShaderBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Three.js Shader Background */}
      <ShaderBackground />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-6 text-6xl font-bold tracking-tight md:text-8xl"
        >
          <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Mercosur First
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-12 max-w-2xl text-xl text-gray-300 md:text-2xl"
        >
          Premium digital experiences with{" "}
          <span className="font-semibold text-amber-500">60fps animations</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 120,
          }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button className="group relative overflow-hidden rounded-full bg-amber-600 px-8 py-4 text-lg font-semibold text-black transition-transform hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          <button className="rounded-full border-2 border-amber-600/50 px-8 py-4 text-lg font-semibold text-amber-500 transition-all hover:border-amber-600 hover:bg-amber-600/10">
            Learn More
          </button>
        </motion.div>
      </div>
    </main>
  );
}
