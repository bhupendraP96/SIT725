const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vupendraw:TWG9VsjIQNjZaSgR@cluster0.grhyvht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Gallery');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

//Add image to gallery
app.post('/api/addimage', async (req, res) => {
    try {
        let imageData = req.body;

        let result = await collection.insertOne(imageData);

        res.json({ statusCode: 201, data: result, message: "Image added" });
    } catch (err) {
        res.json({ statusCode: 500, message: "Oops!. Failed to add image", error: err })

    }
});

//Get all images from database
app.get('/api/getimages', async (req, res) => {
    try {
        let result = await collection.find().toArray();
        res.json({ statusCode: 201, data: result });
    }
    catch (err) {
        res.json({ statusCode: 500, error: err })
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running...");
    console.log("Listening on port " + PORT);
    runDBConnection();
})