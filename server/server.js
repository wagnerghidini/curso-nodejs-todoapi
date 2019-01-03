const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(`Erro: ${e}`);
    })
})

app.listen(3000, () => {
    console.log('Server aberto na porta 3000');
})

module.exports = {app};