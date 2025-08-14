import InsightsService from "../services/insightsService.js";

class InsightsController {
  async getInsights(req, res) {
    /*
    #swagger.tags = ['Insights']
    #swagger.summary = 'Returns insights for a specific user'
    #swagger.description = 'This endpoint will return insights for a specific user based on their marketing service and AI agent.'
    */

    /* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/insightRequest"
                    }
                }
            }
        }
    */

    const { marketing_service, ai_agent, marketing_service_token } = req.body;

    const marketingService = marketing_service;
    const aiAgent = ai_agent;
    const marketingServiceToken = marketing_service_token;

    try {
      const insights = await InsightsService.generateInsights(
        marketingService,
        aiAgent,
        marketingServiceToken
      );
      res.status(200).json(insights);
    } catch (error) {
      console.error("Error generating insights:", error);
      res.status(500).json({ error: "Failed to generate insights" });
    }
  }
}

const InsightsControllerInstance = new InsightsController();

export default InsightsControllerInstance;
