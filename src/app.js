import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//test route
app.get('/', (req, res) => {
  res.json({ message: 'IPL Management API is running' });
});

export default app;
