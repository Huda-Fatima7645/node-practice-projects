const fs = require("fs");

const routes = (req, res) => {
  const url = req.url;
  const method = req.method;
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello, World!');
  // console.log('Received a request', req);
  // console.log('Received a request', req.url, req.headers, req.method);

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Home Page</h1>");
    res.write('<form action="/submit" method="post">');
    res.write('<input type="text" name="name" placeholder="Enter your name">');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/submit" && method === "POST") {
    const body = [];
    // register an event listener for the data event to receive the data from the request body
    // req data comes in streams, so we need to listen for the data event to receive the data chunks
    // we will buffer the data chunks and then process them once we have received all the data
    // data event is fired when a new chunk of data is available to read from the request body
    req.on("data", (chunk) => {
      console.log("Received data chunk:", chunk.toString());
      body.push(chunk);
    });
    // adding return will ensure that the code after this block will not be executed until we have received all the data and processed it in the end event listener
    return req.on("end", () => {
      const data = Buffer.concat(body).toString();
      console.log("Received complete request body:", data);
      const name = data.split("=")[1]; // this will extract the name from the received data
      // We are using fs.writeFileSync() to write the received data to a file named data.txt.
      // we are using sync instead of writefile. it will block the execution of next line and make sure the file is created and data is written to it before we send the response back to the client.
      // fs.writeFileSync("data.txt", name); // this will create a file named data.txt and write the received data to it
      fs.writeFile("data.txt", name, (err) => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html>");
  res.write("<head><title>Home Page</title></head>");
  res.write("<body>");
  res.write("<h1>Welcome to new URl</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

// we are exporting the routes function so that we can use it in other files, such as app.js
// apart from global functions, we can also export our own functions and variables using module.exports, and then import them in other files using require() function. 
// This allows us to organize our code into modules and reuse code across different files.
// syntax module.exports = { functionName, variableName }; to export multiple functions and variables from a module.
module.exports = routes;