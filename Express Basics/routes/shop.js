const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

// default middleware for all routes
// if it is the first middleware,
// it will be executed before the second middleware
router.get("/", (req, res, next) => {
  // res.send("Hello from the default middleware!");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // using simple path like ./views/shop.html will not work because it will look for the file in the current directory
  // our current directory is not our application but operating system directory, so we need to use __dirname to get the current directory of our application from the OS
  // __dirname is a global variable that contains the current directory of the file that is being executed
  // then we will specify the folder and then file 
  // this will build paths for both linux and windows, because windows uses backslash and linux uses forward slash, so path.join will take care of that for us

  // dirname will give us the path to the current file, which is shop.js, and then we will go to the views folder and then to the shop.html file
  // for that we will use .. to go back to the parent directory, which is our application directory, and then we will go to the views folder and then to the shop.html file
   
});

module.exports = router;