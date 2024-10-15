if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const { port } = require('./config/appConfig');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
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
app.use('/api/users', userRoutes);
app.use('/api/jobs',jobRoutes);

app.all("*", (req, res, next) => {
  next(new Error(404, "Page Not Found"));
})

// Start the server
const PORT = port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
