const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('form');
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.send("Received request");
});
app.listen(3000, ()=> {
    console.log("Server is running on port 8080");
});