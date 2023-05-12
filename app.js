const express = require('express');
const app = express();
require('dotenv').config();

//DB connection
const dbConnect = require('./helpers/dbHelper').connectDatabase();

//Initial Route
app.get('/', (_, res) => res.json({ success: true, message: 'Surprise API is running!' }));

// Middlewares
require('./middlewares/index')(app);

//Route imports
const userRoute = require('./routes/userRoutes');
const sendEmailRoutes = require('./routes/sendEmailRoutes')
const surpriseRoute = require('./routes/surpriseRoutes');
const authRoutes = require('./routes/authRoutes');
const allSurprisesRoute = require('./routes/allSurprisesRoute')

// Routes
app.use('/api/users', userRoute);
app.use('/api/surprise', surpriseRoute);
app.use('/api/sendEmail', sendEmailRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/allsurprises', allSurprisesRoute);

module.exports = app;
