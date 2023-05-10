const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const corsOption = {
  origin: '*',
  methods: 'GET,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};


module.exports = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json({ extended: false }));
  app.use(helmet());
  app.use(cors(corsOption));

};
