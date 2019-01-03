const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Impossível conectar ao servidor.');
        }

        const db =  client.db('TodoApp');

        console.log('Conectado.');

        // db.collection('Todos').find({
        //     _id: new ObjectID('5c2d0aefd1f5d12a886762fa')
        // }).toArray().then(
        //     (result) => {
        //         console.log(result);
        //     }, (error) => {
        //         console.log(error);
        //     });

        // db.collection('Todos').find({
        //     _id: new ObjectID('5c2d0aefd1f5d12a886762fa')
        // }).count().then(
        //     (value) => {
        //         console.log('Todos count: ', value);
        //     }, (error) => {
        //         console.log(error);
        //     });

        db.collection('Users').find({name: 'Wagner'}).toArray().then(
            (result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });

        client.close();
});