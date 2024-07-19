import express from 'express';
import bodyParser from 'body-parser';
import routes from '@routes/index';
import authRoute from '@routes/auth.route'; // Import post route directly

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api/auth', authRoute);

export default app;