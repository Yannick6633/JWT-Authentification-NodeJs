const express = require('express');
const router = express.Router();
const game_controller = require('../controllers/game.controller');
const auth = require('../middleware/auth');

router.get('/',auth(),game_controller.game_list);
router.get('/:id',game_controller.game_detail);
router.post('/',game_controller.game_add);
router.put('/:id',game_controller.game_edit);
router.delete('/:id',game_controller.game_delete);

module.exports = router;
