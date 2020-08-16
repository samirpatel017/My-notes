const express = require('express');
const app = express();
const db= require('./config/mongoose');
const Todo = require('./models/todo');
const port = 8000;

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//set static files
app.use(express.urlencoded());
app.use(express.static('assets'));

//use express router
app.use('/',require('./routes/index'));

//run app on port
app.listen(port, function (err) {
    if (err) {
        console.log('Upps There is an error', err);
    }
    console.log('Our Express is successfully Runnig on port', port);
});
