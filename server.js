const express = require('express');
const app = express();

// First line gives access to express library
// Next creates an instance of the express constructor, bamed app



app.listen(8000, () => {
    console.log("server is running");
})