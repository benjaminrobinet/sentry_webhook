const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').Server(app);

app.use(bodyParser.json({
    type: 'application/json'
}));

app.post('/test', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

http.listen(2727, function () {
    console.log('Listening on 2727');
});