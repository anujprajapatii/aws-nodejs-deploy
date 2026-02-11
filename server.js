const express = require("express");
const app = express();


app.get('/api/get', (req, res) => {
    res.send({ message: 'back to nodejs' });
});

app.get('/', (req, res) => {
    res.send("AWS Deployment Successful 🚀");
});



app.listen(8000, () => {
    console.log("listening to 8000");
});
