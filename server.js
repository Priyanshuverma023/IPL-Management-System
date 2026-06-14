import 'dotenv/config';
import app from './src/app.js';
import connectDB from './src/common/config/db.js';

const PORT = process.env.PORT || 3000;

// First connect to DB, then start server

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
    console.log('MongoDB connection failed:', err.message);
    process.exit(1);
})
