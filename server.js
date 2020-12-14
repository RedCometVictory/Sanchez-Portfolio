// place a copy of particles-w.json file into dist folder
const express = require('express');
 
const app = express();

// register views engine
app.set('view engine', 'ejs');
// set views directory
app.set('views', './src/views');

// Init Middleware /Parse JSON
app.use(express.json({
  // extended: false
}));

app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/project-ecom-detail', (req, res, next) => {
  res.render('/project-ecom-detail');
});
app.get('/project-restaurant-detail', (req, res, next) => {
  res.render('/project-restaurant-detail');
});
app.get('/project-weather-detail', (req, res, next) => {
  res.render('/project-weather-detail');
});
app.get('/project-social-detail', (req, res, next) => {
  res.render('project-social-detail');
});