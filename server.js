const express = require('express');
const app = express();
const port = 8000;
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

//In Express, words with a colon in front of them in 
// the url are treated as variables. 
// You can access the value of each variable through req.params

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: "got one user",
        user: req.params.id
    })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})