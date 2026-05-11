import express from 'express';
import bookRoutes from './routes/book.routers';
import loanRoutes from './routes/loan.routes';
import memberRoutes from './routes/member.routers';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/members', memberRoutes);

app.use(errorHandler);

export default app;