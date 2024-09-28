let client = require('../config/dbConnection');

let collection = client.db().collection('Gallery');

function postImage(image) {
    collection.insertOne(image);
}

async function getAllImages() {
   let result =  await collection.find({}).toArray();
   return result
}

module.exports = { postImage, getAllImages };