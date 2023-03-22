const express   = require('express');
const bodyParse = require('body-parser');
const app = express();

//parse application/json
app.use(bodyParse.urlencoded({extended:true})); //bourl
app.use(bodyParse.json()); //bojson

//panggil routes
var routes  = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});

