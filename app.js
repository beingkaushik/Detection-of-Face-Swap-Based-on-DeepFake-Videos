const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use(express.json());

app.use('/', studentRoutes);
app.use('/', courseRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});