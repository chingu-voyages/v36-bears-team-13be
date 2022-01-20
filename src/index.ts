import express from 'express';
import * as dotenv from 'dotenv-safe';
import cors from 'cors';
import morgan from 'morgan';
import advertsRouter from './routes/adverts';
import usersRouter from './routes/users';

dotenv.config();

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: string | number = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/adverts', advertsRouter);
app.use('/users', usersRouter);

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
