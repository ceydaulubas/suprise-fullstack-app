const app = require('./app');
const http = require('http');
const dotenv = require("dotenv").config();

// Server Listener
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);
//Listen
server.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
