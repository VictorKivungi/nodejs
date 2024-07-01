const express = require ('express');
const routes = require ('./routes/studentRoute');
const authroutes = require('./routes/authRoute');

require ('dotenv').config();
require ('./helpers/init_mongodb');

const app = express();
app.use(express.json());
app.use(routes);
app.use(authroutes);

app.listen(process.env.port || 4000, function()
{
    console.log('Now listening for requests on: http://localhost:4000');
});

module.export = app; 