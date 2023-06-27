const AppError = require("../utils/AppError")

class UsersController {
  create(request, response) {
    const { email, username, password } = request.body

    if(!username){
      throw new AppError("O nome é obrigatório.")
    }

    response.json({username, email, password})
  }
}

module.exports = UsersController