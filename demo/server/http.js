const express = require("express");
const app = express();
const compression = require('compression')
const port = 8080

 
// Run static server
app.use(compression())
app.use(express.static("./dist"));
app.listen(port, () =>  { 
    console.log(`listen on ${port}`)
});