"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingUp, ExternalLink } from "lucide-react"

const trends = [
  {
    name: "AI-Powered Code Review",
    summary: "Automated code analysis using LLMs for better code quality",
    source: "Product Hunt",
    score: 95,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Real-time Collaboration Tools",
    summary: "Next-gen collaborative workspaces with AI assistance",
    source: "Reddit",
    score: 88,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sustainable Tech Solutions",
    summary: "Green computing and carbon-neutral applications",
    source: "Devpost",
    score: 92,
    color: "from-violet-500 to-pink-500",
  },
  {
    name: "Web3 Identity Management",
    summary: "Decentralized authentication and privacy-first solutions",
    source: "Product Hunt",
    score: 85,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "AI Health Diagnostics",
    summary: "Machine learning models for early disease detection",
    source: "Reddit",
    score: 90,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Edge Computing Apps",
    summary: "Low-latency applications running on edge networks",
    source: "Devpost",
    score: 87,
    color: "from-pink-500 to-violet-500",
  },
]

export function TrendingTopics() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Trending Topics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="glass p-6 h-full hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className={`h-1 w-full rounded-full bg-linear-to-r ${trend.color}`} />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{trend.name}</h3>
                  <p className="text-sm text-muted-foreground">{trend.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {trend.source}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${trend.score}%` }}
                          transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                          className={`h-full bg-linear-to-r ${trend.color}`}
                        />
                      </div>
                      <span className="text-xs font-semibold">{trend.score}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
