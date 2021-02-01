const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gamebd', {useNewUrlParser:true})
    .then(()=> console.log('Conectado'))
    .catch(()=> console.log('No se ha conectado'))

const gameSchema = new mongoose.Schema(
    {
        nombre: String,
        empresa: String,
        fecha: Number,
        date: {type: Date, default: Date.now}
    }
)

const Game = mongoose.model('game', gameSchema)

createGame();

	async function createGame(){
		const game = new Game({
	        nombre: "Zelda",
	        empresa: "Nintendo",
	        fecha: 2021,
		})
		const respuesta = await game.save();
		console.log(respuesta);
	}
