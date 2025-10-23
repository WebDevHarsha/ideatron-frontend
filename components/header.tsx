"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const handleGenerateIdeas = async () => {
    // This will trigger a refresh of all ideas
    window.location.reload()
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold neon-text">💡 Ideatron</h1>
              <p className="text-sm text-muted-foreground">Where trends become ideas.</p>
            </div>
          </div>
          <Button
            onClick={handleGenerateIdeas}
            className="neon-glow bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Generate New Ideas
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
