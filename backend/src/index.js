const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const { errors } = require('celebrate');

// app.use(cors(
//     origin:'http://meuapp.com'
// ));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => {
    console.log('App listening on port 3333!');
});