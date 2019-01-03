const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; // não é mais necessario no mongoose 5+
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
    
module.exports = {mongoose};