const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const employeeRouter = require('./controllers/employees');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const path = require('path');

logger.info('connecting to', config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
// app.use('*', express.static(`build`));

app.get('*', (req, res) => {
  // dont serve api routes to the react app
  res.sendFile(path.join(__dirname, "build"));
});

app.use(middleware.requestLogger);

app.use('/api/employees', employeeRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
