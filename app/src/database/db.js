const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/eCommerce', {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function () {
    console.log('Connected');
}).on('error', function (error) {
    console.log('Connection error: ' + error);
});


module.exports = mongoose;