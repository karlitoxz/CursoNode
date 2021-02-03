const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        nombre: String,
        empresa: String,
        fecha: Number,
        date: {type: Date, default: Date.now}
    }
)

const Game = mongoose.model('game', gameSchema)

module.exports.Game = Game