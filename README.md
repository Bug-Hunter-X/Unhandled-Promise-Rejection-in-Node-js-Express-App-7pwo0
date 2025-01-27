# Unhandled Promise Rejection in Node.js Express App

This repository demonstrates a common issue in Node.js applications: unhandled promise rejections and errors occurring within asynchronous operations.  The example uses Express.js to create a simple web server that simulates a database error within a `setTimeout` callback.  The error is not properly handled, leading to an unhandled promise rejection, which can be difficult to debug.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version that uses `try...catch` blocks and a global `unhandledRejection` event listener to gracefully handle potential errors.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `node bug.js` to start the server with the buggy code.  Observe that the error is not handled gracefully.
5. Run `node bugSolution.js` to start the server with the corrected code.  Observe that errors are handled properly, and a more informative error message is printed to the console.

## Key Learning Points

* Always handle potential errors in asynchronous operations using `try...catch` blocks.
* Use a global `unhandledRejection` event listener to catch errors that might slip through the cracks. This listener is crucial for handling errors that occur outside of explicit promise handling.  
* Provide informative error messages to aid in debugging and maintenance. 

This example showcases how to prevent unhandled promise rejections and gracefully handle errors in asynchronous Node.js applications.