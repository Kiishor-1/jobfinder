if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const { port } = require('./config/appConfig');

// Import routes
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const FRONT_END_APP = process.env.FRONT_END;

// Middleware
app.use(express.json());
app.use(cors({ origin: FRONT_END_APP, methods: 'GET,POST,PUT,DELETE', allowedHeaders: 'Content-Type,Authorization' }));

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Handle 404 for undefined routes
app.all("*", (req, res, next) => {
  const error = new Error("Page Not Found");
  error.statusCode = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start the server
const PORT = port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
