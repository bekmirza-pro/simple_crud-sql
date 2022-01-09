const express = require('express')
const app = express()

app.use(express.json())


//===>>>>>> Controller

const UserController = require("./controller/UserController")
const PostsController = require("./controller/PostsController")
const CommentsController = require("./controller/CommentsController")

app
    .get('/users', UserController.GET)
    .post('/newUser', UserController.POST)
    .put('/users/:id?', UserController.PUT)
    .delete('/users/:id?', UserController.DELETE)
    .get('/allPosts/:id?', PostsController.GET)
    .post('/newPosts', PostsController.POST)
    .get('/allComments/:id?', CommentsController.GET)
    .post('/newComment', CommentsController.POST)

app.listen(8080, () => console.log(8080))