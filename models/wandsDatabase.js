const mongoose = require('mongoose');

//CREATE SCHEMA

const wandsSchema = new mongoose.Schema({
    wood: {type: String, required: true},
    core: {type: String, required: true},
    img: {type: String},
    price: { type: Number, minimum: 0, required: true},
    qty: { type: Number, minimum: 0, required: true},
    clients: {type: String},
    readyToSubmit: Boolean
    //👆is this always required for purposes of a post route action?
})

//CREATE MODEL
                    
                    //collection👇   //schema👇 
const Wand = mongoose.model("Wand", wandsSchema);

module.exports = Wand;