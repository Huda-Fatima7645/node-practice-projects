// in js we have a few global functions that we can use without importing them
// for example, we have console.log() which is used to print something to the console
// we also have setTimeout() which is used to execute a function after a certain amount of time

// we can also use the require() function to import modules in node.js
// for example, we can import the fs module to work with the file system
// const fs = require('fs');
// importing the functions set to not to pollute the global namespace

// there are core modules in node.js that we can use without installing them, such as fs, http, path, etc.
// we can also install third-party modules using npm (node package manager) and then import them using require()

const http = require("http");
const routes = require("./routes");

// we can create a server using the http module
const server = http.createServer(routes);

// we can listen on a port to start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:8080");
  // process.exit(); // to stop the server after it starts
});

// node app.js to run the server
// it reads the file and parse code and register variables and functions
// there is an event listener for the request event, so when we make a request to the server, it will execute the callback function
// then we can open http://localhost:3000 in the browser to see the response from the server

// though JavaScript is single-threaded, node.js uses an event-driven architecture to handle multiple requests concurrently without blocking the main thread. This allows it to efficiently manage I/O operations and serve multiple clients at the same time.
// node server listener loops and waits for incoming requests, and when a request is received, it executes the callback function without blocking the server from handling other requests. This is achieved through the use of an event loop and non-blocking I/O operations.
// node does handle multiple requests with this same thread.
