//Importing Express Async Errors
require("express-async-errors")
const AppError = require("./utils/AppError")
//Importing Express:
const express = require("express")
//Initializating express:
const app = express()

//Routes configuration
app.use(express.json())
const routes = require("./routes")
app.use(routes)

app.use(( error, request, response, next ) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error);
  
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

//Port settings
const port = 3333;
app.listen(port, () => console.log(`Inicializando o servidor na porta ${port}`))