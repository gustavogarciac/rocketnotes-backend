const { Router } = require("express")
const routs = Router()

const usersRoutes = require("./users.routes")
const notesRoutes = require("./notes.routes")

routs.use("/users", usersRoutes)
routs.use("/notes", notesRoutes)

module.exports = routs