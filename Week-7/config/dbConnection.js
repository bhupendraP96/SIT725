const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vupendraw:TWG9VsjIQNjZaSgR@cluster0.grhyvht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect().then(()=> {
    console.log("Connected to Database.");
}).catch(err => {
    console.log("Couldn't connect to the database: ", err);
});

module.exports = client;