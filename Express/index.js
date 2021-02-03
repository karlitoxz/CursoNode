const mongoose = require('mongoose');
const express = require('express');

const app = express();

const game = require('./routes/game');

app.use(express.json());
app.use('/api/game/', game);

const port = process.env.PORT || 3003;
app.listen(port,()=> console.log('Servidor ejecutando en puerto: '+ port));

mongoose.connect('mongodb://localhost/gamebd', {useNewUrlParser:true, useFindAndModify: false})
    .then(()=> console.log('Conectado a mongo DB'))
    .catch(()=> console.log('No se ha conectado'))
