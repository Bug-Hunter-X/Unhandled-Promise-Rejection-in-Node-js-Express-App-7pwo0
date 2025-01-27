const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        const error = new Error('Database connection failed');
        error.code = 'ECONNREFUSED';
        throw error; 
      } else {
        res.send('Hello from Express!');
      }
    } catch (error) {
      console.error('An error occurred:', error); //Proper error handling
      res.status(500).send('Internal Server Error'); //Informative error response
    }
  }, 1000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add more specific error handling here if needed
});

app.listen(3000, () => console.log('Server listening on port 3000'));