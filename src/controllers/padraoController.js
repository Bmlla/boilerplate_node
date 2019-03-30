var fetch = require('node-fetch');

exports.get =  (req, res) => {
    fetch('https://api.darksky.net/forecast/9eb31f3c966b0932c87bff5d885aacf4/37.8267,-122.4233?lang=pt&units=si')
    .then(res => {
        status: res.status
        body: res.json()
    })
    //return 200;
    //return res.statusCode;
    //return response.statusCode;
    //res.status(200).send(responseJson)
}

exports.post = (req, res) => {
    res.status(200).send(`API respondendo POST`)
}