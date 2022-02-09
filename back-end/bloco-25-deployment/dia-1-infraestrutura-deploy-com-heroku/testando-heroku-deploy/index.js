const express = ('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', async(req, res) => {
  res.send("<h1>Está vivo!!!<h1>");
})

app.listen(PORT, () => console.log(`Ouvindo na porta ${ PORT }`));
