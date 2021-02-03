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


router.delete('/:id', async(req,res) =>{
    const game = await Game.findByIdAndDelete(req.params.id)
    res.json({"message":"the game has been deleted"});
});


router.put('/:id', async(req, res, next) =>{

    const id = req.params.id;
    
    const game = await Game.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });

});

module.exports = router;
