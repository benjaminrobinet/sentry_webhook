const http = require('http');
const bodyParser = require('body-parser');
const app = require('express')(http);

app.use(bodyParser.json);

app.post('/', function (req, res) {
    console.log(req.body)
});

app.listen(8080, function () {
    console.log('listening');
});