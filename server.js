const express   = require('express');
const bodyParse = require('body-parser');

var morgan = require('morgan');
const app = express();

//parse application/json
app.use(bodyParse.urlencoded({extended:true})); //bourl
app.use(bodyParse.json()); //bojson
app.use(morgan('dev'));


//panggil routes
var routes  = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth',require('./middleware'));


app.listen(3000, () => {
    console.log('Server started on port 3000');
});

