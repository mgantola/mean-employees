const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mean-crud';
const URI = 'mongodb://admin:admin1234@ds125489.mlab.com:25489/laskaexample1'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    module.exports = mongoose;