const { Router } = require("express")
const usersRoutes = Router()
const UsersController = require("../controllers/UsersController")
const usersController = new UsersController

function myMiddleware(request, response, next) {
  if (!request.body.isAdmin) {
    return response.json({message: "error user not authorized"})
  } else {
    next()
  }
}
usersRoutes.use(myMiddleware)
usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes