import { GoogleGenAI } from "@google/genai";

class GeminiService {
  constructor() {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    this.ai = new GoogleGenAI({
      apiKey: GEMINI_API_KEY,
    });
  }

  async generateAiResponse(prompt) {
    console.log('Making gemini request');
    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  }

  parseInsightsAiResponse(aiResponse) {
    const match = aiResponse.match(/```json\s*([\s\S]*?)\s*```/);
    if (match) {
      try {
        return JSON.parse(match[1]);
      } catch (e) {
        throw new Error('Error parsing AI response.');
      }
    } else {
      try {
        return JSON.parse(aiResponse);
      } catch (e) {
        console.log('Error parsing AI response:', aiResponse);
        throw new Error('AI response is not valid JSON.');
      }
    }
  }
}

const geminiService = new GeminiService();
export default geminiService;
