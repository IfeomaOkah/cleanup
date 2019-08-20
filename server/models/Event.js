const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var eventSchema = new Schema({
    element:{type: String, required: true},
    image_url: {type: String, default: "client/public/img/air.png"},
    headline: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    cleaner: {
      type: Schema.Types.ObjectId, ref: "users"
    }
})

eventSchema.index({
  element: '',
  headline: 'text',
  description: 'text', 
  date: 'text',
  location: 'text',
  cleaner: 'text'
});

module.exports = mongoose.model("event", eventSchema, "events");