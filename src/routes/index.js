const { Router } = require("express")
const routs = Router()

const usersRoutes = require("./users.routes")

routs.use("/users", usersRoutes)

module.exports = routs