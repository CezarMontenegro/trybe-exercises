const services = require('./services'); 

async (req, res) => {
    res.status(200).json({message: 'pong!'})
}