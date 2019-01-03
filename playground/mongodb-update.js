const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Impossível conectar ao servidor.');
        }

        const db =  client.db('TodoApp');

        console.log('Conectado.');

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID('5c2dfecf13c2fc02f20b8faf')
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }, {returnOriginal: false}).then((result) => {
        //     console.log(result);
        // });

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5c2d0e2000c07d3714c8b5c0')
        }, {
            $set: {
                name: 'Wagner'
            },
            $inc: { age: 1 }
        }, {returnOriginal: false}).then((result) => {
            console.log(result);
        });

        client.close();
});