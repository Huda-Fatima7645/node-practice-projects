const http = require("http");
const express = require("express");

const app = express(); //create an instance of express

app.use((req, res, next) => {
  console.log('Inside first middleware');
  next(); // pass control to the next middleware in the stack
  // if we don't call next(), the request will be left hanging and the client will not receive a response
  // we can also send a response here, but if we do that, we should not call next() because the response has already been sent
  // res.send('Hello from the first middleware'); // this will send a response to the client and end the request-response cycle
  // next(); // if we call next() after sending a response, it will cause an error because we cannot send multiple responses for the same request
})

app.use((req, res, next) => {
  console.log('Inside second middleware');
  res.send('Hello from the second middleware'); // this will send a response to the client and end the request-response cycle
  // next(); // if we call next() after sending a response, it will cause an error because we cannot send multiple responses for the same request
});

// // use express to create an HTTP server
// const server = http.createServer(app);

// // we can listen on a port to start the server
// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});