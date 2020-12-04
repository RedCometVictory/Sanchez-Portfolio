const express = require('express');
// const connectDB = require('./congif/db'); or value is-> require('process.env.MONGO_URI');
 
const app = express();
// Routes

// register views engine
app.set('view engine', 'ejs');
// set views directory
app.set('views', './src/views');

// database connection (mongo/mysql)
// connectDB();

// routes
// const authRoutes = require('./routes/api/authRoutes');

// Init Middleware /Parse JSON
app.use(express.json({
  // extended: false
}));
// let title;
// send data
// app.use((req, res, next) => {
  // res.send("API is running..."))
  // title = 'home';
  // res.render('index', {title})
  // res.locals.title.home = 'Jor-EL\'s Portfolio | Home';
  // next();
  // res.render('index', {title: 'Jor-EL\'s Portfolio | Home'})
// });
app.get('/', (req, res, next) => {
  // res.send("API is running..."))
  // title = 'home';
  // res.render('index', {title})
  // res.locals.title = 'Jor-EL\'s Portfolio | Home';
  res.render('index');
  // res.render('index', {title: 'Jor-EL\'s Portfolio | Home'})
});
app.get('/project-ecom-detail', (req, res, next) => {
  // res.send("API is running..."))
  res.render('/project-ecom-detail');
});
app.get('/project-restaurant-detail', (req, res, next) => {
  // res.send("API is running..."))
  res.render('/project-restaurant-detail');
});
app.get('/project-weather-detail', (req, res, next) => {
  // res.send("API is running..."))
  res.render('/project-weather-detail');
});
app.get('/project-social-detail', (req, res, next) => {
  // res.send("API is running..."))
  res.render('project-social-detail');
});

// app.get('/', (req, res, next) => res.send("API is running..."));

// define routes (to controllers) - change proxy to reflect url
// app.use('/auth', authRoutes);
// app.use('/api/auth', authRoutes);

// database server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));