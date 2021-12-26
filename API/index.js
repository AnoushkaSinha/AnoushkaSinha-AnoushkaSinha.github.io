const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Import models
const Post = require('./src/models/post');

// Define application
const app = express()

// Define DB Connection
const db = mongoose.connect('mongodb://localhost:27017/first-node-api-db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.send({ 'name': 'Anoushka', 'team': 'raman' })
})

// Operations: Create, Read, Update, Delete (CRUD)
app.post('/posts', function(req, res) {

    var post = new Post();
    post.title = title
    post.author = author
    post.content = content


    post.save(function(error, savedPost) {
        if (error) {
            
            res.status(500).send({ error: 'Unable to save Post' })
        } else {
            
            res.status(200).send(savedPost)
        }
    })
});


app.get('/posts/:id', function(req, res) {
    Post.findById(req.params.id, function(error, post, ) {
        if (error)
            res.status(422).send({ error: 'Unable to fetch' })
        else
            res.status(200).send(post)
    })
})


app.get('/posts', function(req, res) {
    const title = req.query.title
    const author = req.query.author
    var filter = {}
    if (title != null)
        filter['title'] = title
    if (author != null)
        filter['author'] = author
    Post.find(filter, function(error, post) {
        if (error)
            res.status(500).send({ error: 'Unable to fetch post' })
        else
            res.status(200).send(post)
    })
})

app.put('/posts/:id', function(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(error, oldPost) {
        if (error)
            res.status(422).send({ error: 'Update is not successful!' })
        else
            res.status(200).send({ 'beforeUpdate': oldPost })
    })
})

app.delete('/posts/:id', function(req, res) {
    Post.findByIdAndDelete(req.params.id, function(error, post) {
        if (error)
            res.status(422).send({ error: 'Delete unsuccessful!' })
        else
            res.status(200).send({ 'deleted': post })
    })
})


app.listen(3000, function() {
    console.log('Server is running at port 3000....')
})