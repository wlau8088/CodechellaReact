const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

// Handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Send index.html on startup
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catch all route handler
app.use((req, res) => res.status(404).send('Page not found: Try a different end point'));

// Express error handler for middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {
      err:
        'An error occurred. Please contact a technical representative for help.',
    },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start up server
module.exports = app.listen(port, () => console.log(`server listening on port ${port}`));