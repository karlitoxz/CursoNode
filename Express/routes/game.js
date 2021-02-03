const express = require('express');
const { Game } = require('../models/game');

const router = express.Router();

router.get('/', async(req, res)=>{
    const games = await Game.find();
    res.send(games);
})

router.post('/', async(req, res)=>{
    const game = new Game({
        nombre: req.body.nombre,
        empresa: req.body.empresa,
        fecha: req.body.fecha
    })
    const resultado = await game.save();
    res.status(201).send(resultado);
})

module.exports = router;
