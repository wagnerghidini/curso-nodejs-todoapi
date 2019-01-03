const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./db/models/todo');
var {User} = require('./db/models/user');

var app = express();
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        console.log('Tarefa criada: ', doc);
        res.send(doc);
    }, (e) => {
        var error = `Erro: ${e}`;
        console.log(error);
        res.status(400).send(error);
    })
})

app.listen(3000, () => {
    console.log('Server aberto na porta 3000');
})

// var newTodo = new Todo({
//     text: 'Encher linguiça'
// });

// newTodo.save().then((doc) => {
//     console.log('Todo salvo: ', doc)
// }, (e) => {
//     console.log('Impossível salvar Todo. ', e)
// });

// var anotherTodo = new Todo({
//     text: 'Novo Todo'
// });

// anotherTodo.save().then((doc) => {
//     console.log('Todo salvo: ', JSON.stringify(doc, undefined, 2))
// }, (e) => {
//     console.log('Impossível salvar Todo: ', e)
// });

// var newUser = new User({
//     email: 'email@exemplo.com'
// })

// newUser.save().then((doc) => {
//     console.log('Usuario criado: ', doc);
// }, (e) => {
//     console.log('Usuário não pode ser criado. ', e)
// });