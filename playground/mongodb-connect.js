// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// // Object Destructuring
// var user = {name: 'wagner', age:34};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Impossível conectar ao servidor.');
        }
        console.log('Conectado.');

        const db =  client.db('TodoApp');

        var oid = new ObjectID();
        console.log(oid)

        // db.collection('Todos').insertOne({
        //     text: 'Tarefa para fazer',
        //     completed: false,
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Impossível criar tarefa. ', error);
        //     }
            
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        // db.collection('Users').insertOne({
        //     name: 'Wagner',
        //     age: 34,
        //     location: 'São José'
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Impossível criar usuário. ', error);
        //     }

        //     console.log(result.ops[0]._id.getTimestamp());
        // })

        client.close();
});