var mongoose = require("mongoose")
  , Schema = mongoose.Schema

var Client = new Schema({
    company: { type: String },
    contact: {
        name: { type: String },
        phone: { type: String },
        email: { type: String }
    },
    created: { type: Date, default: Date.now }
})

mongoose.model("Client", Client)
