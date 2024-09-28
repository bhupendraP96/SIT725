const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.post('/', (req, res) => {
    galleryController.postImage(req, res);
});

router.get('/', (req, res) => {
    galleryController.getAllImages(req, res);
});

module.exports = router;