const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
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

// You can use dynamic variables to search for specific
// data associated with an id in your database, 
//  and return that (instead of just returning the id).

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username == mockUsername && password == mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            succes: false,
            message: "password and username do not match"
        })
    }
})

// A POST request can send data securely through the request
// body. In order to make POST requests, 
// first we need to include the "body-parser" library from 
// our node_modules (included with express)

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})