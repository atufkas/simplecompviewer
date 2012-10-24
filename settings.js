var express = require("express")

exports.boot = function (app) {
    app.set("showStackError", true)
    app.use(express.static(__dirname + "/public"))
    app.use(express.logger(":method :url :status"))
    app.set("views", __dirname + "/app/views")
    app.set("view engine", "jade")
    app.configure(function () {
        app.use(function (req, res, next) {
            res.locals.appName = "simplecompviewer"
            res.locals.title = "simplecompviewer"
            res.locals.showStack = app.showStackError
            res.locals.req = req
            next()
        })
    })
    app.use(express.cookieParser())
    app.use(express.bodyParser())
    app.use(express.methodOverride())
    app.use(express.favicon())
    app.use(app.router)
    // assume "not found" in the error msgs is a 404
    app.use(function (err, req, res, next) {
        if (~err.message.indexOf("not found")) { return next() }
        console.error(err.stack)
        res.status(500).render("500")
    })
    // assume 404 since no middleware responded
    app.use(function (req, res, next) {
        res.status(404).render("404", { url: req.originalUrl })
    })
    app.set("showStackError", false)
}
