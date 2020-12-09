const Game = require('../models').Game;

exports.game_list = (req, res, next) => {
    Game.findAll({
        order: [
            ['name','ASC']
        ]
    })
        .then( games => res.status(200).json(games))
        .catch(err => console.log(err))
}

exports.game_add = (req, res, next) => {
    const game = req.body;
    Game.create(game)
        .then( data => res.status(201).json(data))
        .catch(error => {
            if(error.name == "SequelizeUniqueConstraintError"){
                res.status(403).json({'error': `Duplicate entry. Impossible to add`});
            }
            else{
                res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
            }
        })
}

exports.game_detail = (req, res, next) =>{
    const id = req.params.id;
    // Game.findOne({
    //   where: {
    //     id: id
    //   }
    // })
    Game.findByPk(id)
        .then(game => res.status(200).json(game))
        .catch(err => console.log(err))
}

exports.game_edit = (req, res, next) =>{
    const id = req.params.id;
    const game = req.body;
    Game.update(game, {
        where: {
            id: id
        }
    })
        .then(() => {
            res.status(200).json({message: 'Game updated'})
        })
        .catch(err => console.log(err))
}

exports.game_delete = (req, res, next) =>{
    const id = req.params.id;
    Game.destroy({
        where: {
            id: id
        }
    })
        .then(game => res.status(200).json({message: 'Game deleted'}))
        .catch(err => console.log(err))
}

