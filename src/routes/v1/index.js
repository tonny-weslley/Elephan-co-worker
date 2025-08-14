import { Router } from 'express';
import insights from './insights.js';

const v1 = Router();

v1.use('/insights/', insights);

export default v1;
