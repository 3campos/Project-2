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
//can add additional controllers here

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

//SET UP MONGOOSE (added)
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

//ROUTES & CONTROLLERS
// //404 route
// app.get((req, res) => {
//     res.send("404! error! page not found ")
// })

//Home route
app.get("/", (req, res) => {
    res.render("home");
});

//seed
app.get('/wands/seed', (req, res)=>{
    Wand.create([
        {
            wood: 'Ash',
            core: 'Unicorn Hair',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/8/8c/Ron_weasley_first_wand.jpg/revision/latest/scale-to-width-down/110?cb=20141208014135',
            price: 5,
            qty: 5,
            clients: 'Ron Weasley', 'Cedric Diggory'
        },
        {
            wood: 'Alder',
            core: 'Phoenix Feather',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/b/bd/Alder.png/revision/latest?cb=20120718010016',
            price: 5,
            qty: 5,
            clients: 'Quirinus Quirrell'
        },
        {
            wood: 'Birch',
            core: 'Dragon Heartstring',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Ash.png/revision/latest?cb=20130807174346',
            price: 5,
            qty: 5, 
            clients: 'Dolores Umbridge'
        },
        {
            wood: 'Cedar',
            core: 'Dragon Heartstring',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/f/fb/ProfHoraceSlughornWandNN8294.jpg/revision/latest/scale-to-width-down/110?cb=20141208233440',
            price: 5,
            qty: 5, 
            clients: 'Horace Slughorn'
        },
        {
            wood: 'Cherry',
            core: 'Unicorn Hair',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/f/f0/Neville%27s_wand.jpg/revision/latest/scale-to-width-down/110?cb=20141209002728',
            price: 5,
            qty: 5, 
            clients: 'Neville Longbottom'
        },
        {
            wood: 'Cherry',
            core: 'Dragon Heartstring',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/6/6d/Gilderoy_Lockhart.jpg/revision/latest/scale-to-width-down/110?cb=20160117044239',
            price: 5,
            qty: 5, 
            clients: 'Gilderoy Lockhart'
        },
        {
            wood: 'Cypress',
            core: 'Unicorn Hair',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/4/40/Remus_wand.jpg/revision/latest/scale-to-width-down/110?cb=20141208233259',
            price: 5,
            qty: 5, 
            clients: 'Remus Lupin'
        },
        {
            wood: 'Elm',
            core: 'Dragon Heartstring',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/e/ee/Lucius_Malfoy_wand.png/revision/latest?cb=20210108150531',
            price: 5,
            qty: 5, 
            clients: 'Lucius Malfoy'
        },
        {
            wood: 'Elm',
            core: 'Dragon Heartstring',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/e/ee/Lucius_Malfoy_wand.png/revision/latest?cb=20210108150531',
            price: 5,
            qty: 5, 
            clients: 'Lucius Malfoy'
        },
        {
            wood: 'Fir',
            core: 'Dragon Heartstring',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/d/df/McGonagall_Wand.png/revision/latest/scale-to-width-down/1000?cb=20161128005505',
            price: 5,
            qty: 5, 
            clients: 'Minerva McGonagall'
        },
        {
            wood: 'Hawthorn',
            core: 'Unicorn Hair',
            image: 'https://static.wikia.nocookie.net/harrypotter/images/f/f0/Draco_Malfoy_Wand.jpg/revision/latest/scale-to-width-down/110?cb=20141208233016',
            price: 5,
            qty: 5, 
            clients: 'Draco Malfoy'
        }
    ], (err, data)=>{
        res.redirect('/wands')
    })
})



// wood: {type: String, required: true},
//     feather: {type: String, required: true},
//     image: String,
//     price: { type: Number, minimum: 0},
//     qty: { type: Number, minimum: 0}

//INTERNAL ROUTES
app.use("/wands/seed", (req, res)=>{
    Wand.create([])
})






//SERVER LISTENER
app.listen(PORT, function(){
    console.log(`Open for Business! 🏪${PORT}`)
});

//const inventory = require('./models/index.js');
//QUESTION: where does this go in teh above order?