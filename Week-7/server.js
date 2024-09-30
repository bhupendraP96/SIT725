const express = require("express");
const app = express();
require('./config/dbConnection');
const galleryRoutes = require('./routes/galleryRoutes')

app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/gallery', galleryRoutes);

//Socket communication
let http = require('http').createServer(app);
let io = require('socket.io') (http);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('formSubmission', (formData) => {
        console.log('Form data received:', formData);

        socket.emit('formSubmitted', 'Thank you for your remembering us!');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = 3000;
http.listen(PORT, () => {
    console.log("Server running...");
    console.log("Listening on port " + PORT);
    console.log("Go to: http://localhost:"+ PORT + "/");
})