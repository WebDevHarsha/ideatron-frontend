import { Header } from "@/components/header"
import { TrendingTopics } from "@/components/trending-topics"
import { IdeaFeed } from "@/components/idea-feed"
import { UserInteraction } from "@/components/user-interaction"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4 py-8 space-y-16">
          <TrendingTopics />
          {/* <IdeaFeed /> */}
          <UserInteraction />
        </div>
        <Footer />
      </div>
    </main>
  )
}
