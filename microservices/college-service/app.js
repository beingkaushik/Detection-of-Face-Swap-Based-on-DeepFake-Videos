const express = require('express');
const app = express();

app.use(express.json());

let colleges = [
    { id: 1, name: "ATMECE", city: "MYSURU" },
    { id: 2, name: "MIT", city: "mysuru" }
];

app.get('/colleges', (req, res) => {
    res.json(colleges);
});

app.listen(3003, () => {
    console.log("College Service running on port 3003");
});