const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wandsSchema = new Schema({
    wood: {type: String, required: true},
    core: {type: String},
    img: {type: String},
    price: { type: Number, minimum: 0},
    qty: { type: Number, minimum: 0},
    clients: {type: String}
})

const Wand = mongoose.model("Wand", wandsSchema);

module.exports = Wand;