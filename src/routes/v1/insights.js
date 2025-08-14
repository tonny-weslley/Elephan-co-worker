import { Router } from 'express';
import InsightsController from '../../controllers/insightsController.js';
const insightsRouter = Router();

insightsRouter.post('/', InsightsController.getInsights);

export default insightsRouter;
