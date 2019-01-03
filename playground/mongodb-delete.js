const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log('Impossível conectar ao servidor.');
        }

        const db =  client.db('TodoApp');

        console.log('Conectado.');

        // // deleteMany()
        // db.collection('Todos').deleteMany({text: 'Denovo outra tarefa para fazer'}).then((result) => {
        //     console.log(result);
        // })

        // // deleteOne()
        // db.collection('Todos').deleteOne({text: 'Mais outra tarefa para fazer'}).then((result) => {
        //     console.log(result);
        // });


        // //findOneAndDelete()
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result)
        // });

        // // findOneAndDelete() com _id
        // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c2dfc3613c2fc02f20b8f45')}).then((result) => {
        //     console.log(result)
        // });

        // deleteMany()
        db.collection('Todos').deleteMany({text: 'Outra tarefa para fazer'});

        client.close();
});