const express = require("express");
const app = express();
require('./config/dbConnection');
const galleryRoutes = require('./routes/galleryRoutes')

app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/gallery', galleryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running...");
    console.log("Listening on port " + PORT);
    console.log("Go to: http://localhost:"+ PORT + "/");
})