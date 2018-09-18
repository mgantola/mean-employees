const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares

//Routes


// Starting the server
app.listen(app.get('port'),() =>{
    console.log('Server on port',  app.get('port'));
})