//Importing express
const express = require("express")
//Initializing express
const app = express()
app.get("/products/:id", (req, res) => {
  const { id } = req.params
  res.send(`
  Exibindo o produto de Id ${id}`)
})
//Our api will be listening to this port
const port = 3333;
app.listen(port, () => console.log(`Inicializando o servidor na porta ${port}`))
