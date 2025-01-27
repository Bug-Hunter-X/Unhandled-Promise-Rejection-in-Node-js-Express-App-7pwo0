const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a database error
      const error = new Error('Database connection failed');
      error.code = 'ECONNREFUSED';
      throw error; // Throwing an error inside the setTimeout callback
    } else {
      res.send('Hello from Express!');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));