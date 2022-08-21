require("dotenv").config()

//EXTERNAL MODULES
const express = require('express');
const methodOverride = require('method-override');
//added:
const session = require('express-session')
//REQUIRE MODELS HERE (added):

const { render } = require('ejs');
const Wand = require('./models/Wand.js')

//INTERNAL MODULES
const testCtrl = require("./controllers/testRoute.js")

//INSTANCED MODULES
const app = express()

//CONFIGURATION
const PORT = process.env.PORT||3000
//set the engine to ejs
app.set("view engine", "ejs")

//MIDDLEWARE
app.use(express.json())
//body data middleware
app.use(express.urlencoded({extended: true}))
//method override Middleware
app.use(methodOverride("_method"))
//serve public files
app.use(express.static("public"))
//use line below for deployment
//app.use(express.static(path.join(___dirname, "public")));
//QUESTION: Is dirname a keyword or am I writing my own directory's name there on the above line?

//const { render } = require('ejs');
//QUESTION: I wrote the above line myself. Is my analysis correct?
//require('ejs') pulls the elements from the ejs pages.    
//const { render } displays any  elements from the ejs that I create on the webpage.


//ROUTES & CONTROLLERS
//Home route
app.get("/", (req, res) => {
    res.render("home");
});

// //404 route
// app.get((req, res) => {
//     res.send("404! error! page not found ")
// })

//SET UP MONGOOSE (added)
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

//INTERNAL ROUTES
app.use("/wands", testCtrl)

//SERVER LISTENER
app.listen(PORT, function(){
    console.log(`Open for Business! 🏪${PORT}`)
});

//const inventory = require('./models/index.js');
//QUESTION: where does this go in teh above order?