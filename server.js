// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('', api);

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'server/dist/index.html'));
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '9192';
app.set('port', port);

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.use(cors({
    origin: ['http://localhost:4200'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'x-access-token', 'XSRF-TOKEN'],
    preflightContinue: false
}));
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 * 
 * 
 */




server.listen(port, () => console.log(`API running on localhost:${port}`));