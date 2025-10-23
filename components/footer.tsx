"use client"

import { motion } from "framer-motion"
import { Database, Sparkles, Cloud } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="border-t border-border/50 mt-16"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">Built with cutting-edge technology</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Database className="w-4 h-4 text-primary" />
              <span>MongoDB Atlas</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Gemini AI</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Cloud className="w-4 h-4 text-primary" />
              <span>Fivetran</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 Ideatron. Where trends become ideas.</p>
        </div>
      </div>
    </motion.footer>
  )
}
