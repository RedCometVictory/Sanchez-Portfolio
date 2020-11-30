const express = require('express');
// const connectDB = require('./congif/db'); or value is-> require('process.env.MONGO_URI');
 
const app = express();
// Routes

// register views engine
app.set('view engine', 'ejs');
// set views directory
app.set('views', './src/views');

// database connection (mongo/mysql)
connectDB();

// routes
// const authRoutes = require('./routes/api/authRoutes');

// Init Middleware /Parse JSON
app.use(express.json({
  // extended: false
}));

// send data
app.get('/', (req, res, next) => res.send("API is running..."));

// define routes (to controllers) - change proxy to reflect url
// app.use('/auth', authRoutes);
// app.use('/api/auth', authRoutes);

// database server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));