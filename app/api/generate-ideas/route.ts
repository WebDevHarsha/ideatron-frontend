import { NextRequest, NextResponse } from "next/server"
import { GoogleGenAI } from "@google/genai"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { interest } = await request.json()

    if (!interest || !interest.trim()) {
      return NextResponse.json({ error: "Interest is required" }, { status: 400 })
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("ideatron")
    const collection = db.collection("ideatron")

    // Fetch data from MongoDB
    const ideas = await collection.find({}).toArray()

    // Prepare context from MongoDB data
    const context = ideas
      .map((idea) => `Title: ${idea.title}\nSummary: ${idea.summary}`)
      .join("\n\n")

    // Initialize Gemini AI
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    })

    // Create the prompt
    const prompt = `Based on the following existing project ideas and the user's interest in "${interest}", generate 3 unique and innovative project ideas.

Existing project ideas for context:
${context}

User's interest: ${interest}

Generate 3 creative project ideas related to ${interest}. For each idea, provide:
1. A catchy title
2. A brief description (2-3 sentences)
3. Difficulty level (Easy, Medium, or Hard)
4. Wow factor (1-5, where 5 is most impressive)

Format your response as a JSON array with the following structure:
[
  {
    "title": "Project Title",
    "description": "Project description",
    "difficulty": "Medium",
    "wowFactor": 4
  }
]

Only return the JSON array, nothing else.`

    // Generate content using Gemini
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    })

    // Parse the response
    const responseText = response.text || ""
    const jsonMatch = responseText.match(/\[[\s\S]*\]/)
    
    if (!jsonMatch) {
      throw new Error("Failed to parse Gemini response")
    }

    const generatedIdeas = JSON.parse(jsonMatch[0])

    return NextResponse.json({ ideas: generatedIdeas })
  } catch (error) {
    console.error("Error generating ideas:", error)
    return NextResponse.json(
      { error: "Failed to generate ideas" },
      { status: 500 }
    )
  }
}
