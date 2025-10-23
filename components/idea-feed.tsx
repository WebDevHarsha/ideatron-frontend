"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Lightbulb, Flame } from "lucide-react"

const ideas = [
  {
    trend: "AI-Powered Code Review",
    ideas: [
      {
        title: "CodeGuardian",
        description:
          "Real-time AI code reviewer that integrates with GitHub and provides instant feedback on pull requests with security vulnerability detection.",
        difficulty: "Medium",
        wowFactor: 4,
      },
      {
        title: "SmartRefactor",
        description:
          "AI assistant that suggests code refactoring opportunities and automatically generates optimized versions with performance benchmarks.",
        difficulty: "Hard",
        wowFactor: 5,
      },
    ],
  },
  {
    trend: "Real-time Collaboration Tools",
    ideas: [
      {
        title: "SyncSpace",
        description:
          "Virtual workspace with AI-powered meeting summaries, action item extraction, and automatic task assignment.",
        difficulty: "Medium",
        wowFactor: 4,
      },
      {
        title: "CollabCanvas",
        description:
          "Infinite canvas for team brainstorming with AI that organizes ideas, suggests connections, and generates visual mind maps.",
        difficulty: "Easy",
        wowFactor: 3,
      },
    ],
  },
  {
    trend: "Sustainable Tech Solutions",
    ideas: [
      {
        title: "GreenCode",
        description:
          "Developer tool that measures carbon footprint of code and suggests eco-friendly alternatives for algorithms and infrastructure.",
        difficulty: "Hard",
        wowFactor: 5,
      },
      {
        title: "EcoTracker",
        description:
          "Personal carbon footprint tracker with gamification, community challenges, and AI-powered sustainability recommendations.",
        difficulty: "Easy",
        wowFactor: 3,
      },
    ],
  },
]

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/50",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  Hard: "bg-red-500/20 text-red-400 border-red-500/50",
}

export function IdeaFeed() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">AI-Generated Ideas</h2>
        </div>
        <div className="space-y-8">
          {ideas.map((category, categoryIndex) => (
            <div key={category.trend}>
              <h3 className="text-lg font-semibold text-primary mb-4">{category.trend}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.ideas.map((idea, ideaIndex) => (
                  <motion.div
                    key={idea.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * (categoryIndex * 2 + ideaIndex) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="glass p-6 h-full border-2 border-transparent hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative space-y-4">
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{idea.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{idea.description}</p>
                        <div className="flex items-center justify-between pt-2">
                          <Badge className={difficultyColors[idea.difficulty as keyof typeof difficultyColors]}>
                            {idea.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: idea.wowFactor }).map((_, i) => (
                              <Flame key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
