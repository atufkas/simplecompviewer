// Routes
module.exports = function (app) {
    var clients = require("../app/controllers/clients_controller")
    app.get("/clients", clients.index)
    app.get("/clients/new", clients.new)

    var home = require("../app/controllers/home_controller")
    app.get("/", home.index)
}
