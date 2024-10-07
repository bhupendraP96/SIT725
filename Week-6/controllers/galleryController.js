const gallery = require('../models/gallery')

const postImage = (req, res) => {
    try {
        let image = req.body;
        let result = gallery.postImage(image);

        res.status(201).json({ statusCode: 201, data: result, message: "Image added" });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: "Oops!. Failed to add image", error: err })
    }
}

const getAllImages = async (req, res) => {
    try {
        let result = await gallery.getAllImages();
        if (result) {
            res.status(201).json({ statusCode: 201, data: result });
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: "Oops!. Failed to get Images", error: err })

    }
}


module.exports = { postImage, getAllImages };