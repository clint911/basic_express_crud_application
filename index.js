import express from 'express';//to use such add type:module in your package.json file
//similar to const express = require('express);
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 8080;

//initializing body parser middle-ware
app.use(bodyParser.json());

app.use('/users', usersRoutes);

//creating our first route
app.get('/', (req, res) => {res.send('Hello from Homepage')});

//listening to incoming requests
app.listen(PORT, () => 
    console.log(`Server running on port: http://localhost:${PORT}`));

