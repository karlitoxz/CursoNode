const express = require('express');

const app = express();
const clienteRoutes = require('./components/client/routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookstore', {useNewUrlParser:true, useFindAndModify: false})
    .then(()=> console.log('Conectado a mongo DB'))
    .catch(()=> console.log('No se ha conectado'))

//Routes
app.use(express.json());
app.use('/clients', clienteRoutes)

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('El servidor esta encendido en el puerto: ', port);
})