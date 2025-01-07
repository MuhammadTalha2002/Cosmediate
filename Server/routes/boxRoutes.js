const express = require('express');
const router = express.Router();
const { getBoxData, addBoxData, deleteBoxData } = require('../controllers/boxController');

router.get('/:boxType', getBoxData);
router.post('/:boxType', addBoxData);
router.delete('/:boxType', deleteBoxData);

module.exports = router;
