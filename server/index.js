const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); // Anteriormente se utilizaba body parser

//Routes


// Starting the server
app.listen(app.get('port'),() =>{
    console.log('Server on port',  app.get('port'));
})