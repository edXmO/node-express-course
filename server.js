const express = require('express');
const app = express();

// First line gives access to express library
// Next creates an instance of the express constructor, bamed app

const mockUserData = [
    { name: "Mark" },
    { name: "Jill" }
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: "succesfully got user. Nice!",
        users: mockUserData
    })
})

app.listen(8000, () => {
    console.log("server is running");
})