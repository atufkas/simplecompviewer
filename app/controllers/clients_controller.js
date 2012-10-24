var mongoose = require("mongoose")
  , Client = mongoose.model("Client")

exports.new = function (req, res) {
    res.render("clients/new", {
        headline: "New Client",
        client: new Client({})
    })
}

exports.index = function (req, res) {
    Client
        .find({})
        .select("company contact")
        .exec(function (err, clients) {
            if (err) { return res.render("500") }
            res.render("clients/index", {
                headline: "All Clients",
                clients: clients
            })
        })
}

