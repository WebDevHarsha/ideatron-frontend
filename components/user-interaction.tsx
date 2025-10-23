"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Flame } from "lucide-react"

interface GeneratedIdea {
  title: string
  description: string
  difficulty: string
  wowFactor: number
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/50",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  Hard: "bg-red-500/20 text-red-400 border-red-500/50",
}

export function UserInteraction() {
  const [interest, setInterest] = useState("")
  const [ideas, setIdeas] = useState<GeneratedIdea[]>([])
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!interest.trim()) return

    setLoading(true)

    // Simulate API call - in production, this would call Gemini API
    setTimeout(() => {
      const mockIdeas: GeneratedIdea[] = [
        {
          title: `${interest} Analytics Dashboard`,
          description: `Real-time analytics platform for ${interest} with AI-powered insights, predictive modeling, and automated reporting features.`,
          difficulty: "Medium",
          wowFactor: 4,
        },
        {
          title: `Smart ${interest} Assistant`,
          description: `AI-powered virtual assistant specialized in ${interest} that provides personalized recommendations and automates routine tasks.`,
          difficulty: "Hard",
          wowFactor: 5,
        },
        {
          title: `${interest} Community Hub`,
          description: `Social platform connecting ${interest} enthusiasts with collaborative tools, knowledge sharing, and gamified learning experiences.`,
          difficulty: "Easy",
          wowFactor: 3,
        },
      ]
      setIdeas(mockIdeas)
      setLoading(false)
    }, 1500)
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Personalized Ideas</h2>
        </div>
        <Card className="glass p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="interest" className="text-sm font-medium mb-2 block">
                What are you interested in?
              </label>
              <div className="flex gap-3">
                <Input
                  id="interest"
                  placeholder="e.g., healthcare, education, gaming..."
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  className="glass border-primary/30 focus:border-primary"
                />
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !interest.trim()}
                  className="neon-glow bg-primary hover:bg-primary/90 text-primary-foreground min-w-[140px]"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {ideas.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-primary">Your Personalized Ideas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ideas.map((idea, index) => (
                      <motion.div
                        key={idea.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <Card className="glass p-6 h-full border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 group">
                          <div className="space-y-4">
                            <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                              {idea.title}
                            </h4>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
