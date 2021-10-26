const express = require('express');
const app = express();
const cors = require('cors');
const employeeRouter = require('./controllers/employees');

app.use(cors());
app.use(express.static('build')); // change this
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/employees', employeeRouter);

const server = http.createServer(app);

const PORT = process.env.PORT
server.listen(config.PORT, () => {
  console.log(`server running on port ${PORT}`)
});
