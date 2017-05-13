var express = require('express');
var router = express.Router();

const Song = require('../models/Song')
const SongController = require('../controllers/song_controller')

/* GET home page. */
router.get('/', SongController.getSong);
router.get('/api', SongController.getSongApi);
// JSON
router.post('/', SongController.createSong);
router.post('/api', SongController.createSongApi);

// Edit page
router.get('/:id/edit', SongController.getEdit);
router.post('/:id/edit', SongController.updateSong);
// JSON
router.get('/api/:id', SongController.getSingleSongApi);
router.post('/api/:id/edit', SongController.updateSongApi);

// Delete
router.post('/:id/delete', SongController.deleteSong);

// JSON
router.delete('/api/:id/delete', SongController.deleteSongApi);

module.exports = router;
