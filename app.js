const express = require('express');
const app = express();
require('dotenv').config();

//DB connection
const dbConnect = require('./helpers/dbHelper').connectDatabase();

//Initial Route
app.get('/', (_, res) => res.json({ success: true, message: 'Suprise API is running!' }));

// Middlewares
require('./middlewares/index')(app);

//Route imports
const userRoute = require('./routes/userRoutes');
const sendEmailRoutes = require('./routes/sendEmailRoutes')
const surpriseRoute = require('./routes/surpriseRoutes');

// Routes
app.use('/api/users', userRoute);
app.use('/api/surprise', surpriseRoute);
app.use('/api/sendEmail', sendEmailRoutes);

module.exports = app;
