import aiAgent from './geminiService.js';
import HubspotService from './hubspotService.js'
import GeminiService from './geminiService.js';
import { prompts } from '../utils/index.js';

class InsightsService {
  async generateInsights(marketingService = 'hubspot', aiAgent = 'gemini', marketingServiceToken) {

    const marketingToolService = this.getMarketingToolService(marketingService, marketingServiceToken);
    const aiAgentService = this.getAiAgentService(aiAgent);

    const businessData = await marketingToolService.getBusinessData();

    const aiResponse = await aiAgentService.generateAiResponse(`
      ${prompts.insights} -
      ${JSON.stringify(businessData, null, 2)}
    `);

    const parsedData = aiAgentService.parseInsightsAiResponse(aiResponse);

    return parsedData;
  }

  getMarketingToolService(marketingService, marketingServiceToken) {
    if (marketingService === 'hubspot') {
      return new HubspotService(marketingServiceToken);
    }
  }

  getAiAgentService(aiAgent) {
    if (aiAgent === 'gemini') {
      return GeminiService;
    }
  }
}

const insightsService = new InsightsService();
export default insightsService;
