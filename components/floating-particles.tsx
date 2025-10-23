"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  xOffset: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[] | null>(null)

  useEffect(() => {
    // generate random particles only on the client after mount
    const generated: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      // precompute horizontal animation offset to avoid randomness during render
      xOffset: Math.random() * 20 - 10,
    }))
    setParticles(generated)
  }, [])

  // Render nothing (or a stable placeholder) on the server and until mounted
  if (!particles) return <div className="fixed inset-0 overflow-hidden pointer-events-none" />

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
