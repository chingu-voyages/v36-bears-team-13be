import express from 'express';
import * as dotenv from 'dotenv-safe';
import authRouter from '@src/routes/auth';
import advertsRouter from '@src/routes/adverts';

dotenv.config();

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: string | number = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/adverts', advertsRouter);
app.use('/auth', authRouter);

// Handling '/' Request
app.get('/', (req, res): void => {
  res.json({
    message: 'Successfully accessed the endpoint',
    success: true,
    payload: {},
  });
});

// Server setup
app.listen(port, (): void => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
