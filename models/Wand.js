const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wandsSchema = new Schema({
    wood: {type: String, required: true},
    feather: {type: String, required: true},
    image: String,
    price: { type: Number, minimum: 0},
    qty: { type: Number, minimum: 0}
    })

const Wand = mongoose.model("Wand", wandsSchema);

module.exports = Wand;