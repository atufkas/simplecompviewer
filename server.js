var express = require("express")
  , fs = require("fs")

// Config
var env = process.env.NODE_ENV || "development"
  , config = require("./config/config")[env]

// DB Connection
var mongoose = require("mongoose")
mongoose.connect(config.db)

// Models
var modelsPath = __dirname + "/app/models"
  , modelFiles = fs.readdirSync(modelsPath)
modelFiles.forEach(function (file) {
    require(modelsPath + "/" + file)
})

// Express App
var app = express()

// Application settings
require("./settings").boot(app)

// Routes
require("./config/routes")(app)

// Start the app
var port = process.env.PORT || 3000
app.listen(port)
console.log("SIMPLECOMPVIEWER started on port " + port)
