const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const userRouter = require('./routers/userRouter');
const { isValidToken } = require('./middewares/validations');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.get('/btc', isValidToken, async(_req, res) => {
    const result = await axios.get(ENDPOINTEXTERNALAPI);

    res.status(200).json(result.data);
})

app.listen(3000, console.log('Escutando na porta 3000'));

