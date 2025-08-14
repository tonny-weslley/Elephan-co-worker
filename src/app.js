import express from 'express';
import { logger, err } from './middlewares/index.js';
import compression from 'compression';
import v1 from './routes/v1/index.js';

// -- Swagger --
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger-output.json' with { type: "json" };
import bodyParser from 'body-parser';

const app = express();
app.use(logger);
app.use(err);
app.use(compression());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());


app.use('/api/v1', v1);

export default app;
