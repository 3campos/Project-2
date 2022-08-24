require("dotenv").config()

//EXTERNAL MODULES
const express = require('express');
const methodOverride = require('method-override');
//added:
const session = require('express-session')
//REQUIRE MODELS HERE (added):

const { render } = require('ejs');
const Wand = require('./models/Wand.js')
const Wands = require("./models/Wands.js")

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
app.use(express.urlencoded({extended: false}))
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

//Index 

app.get("/wands", (req, res)=>{
    res.render('index.ejs', {
        allWands: Wands}); 
})


//show route
app.get('/wands/:id', (req, res)=>{
    const thisWand = Wands[req.params.id]
        res.render('show.ejs', {
            allWands: thisWand,
            //the request that we're making here is getting the param. The id is what is being passed in.
            id: req.params.id
            //we stored the id in its own variable that we can interpolate the variable into a delete route.
        })
})

//Put route/Sell route
// app.get('/wands/:id/sell', (req, res)=>{
//     allWands.findByIdAndUpdate(req.params.id, {$inc:{qty:-1}}, (err) => {
//         res.redirect('/wands')
//         })
//     })


//what i'm trying to accomplish with the below code is decrease the quantity of the wand by 1. I tried this another way (see above commented out code) but that did not work.
    //My set up seems correct but nothing is happening to the wand's quantity (that is, it's not decreasing). Am I missing something here?
app.get('/wands/:id/sell', (req, res)=>{
    console.log('wand sell triggered')
    //the above line is a route to the sell page. The button that invokes this route is contained in the show.ejs page.
    Wands.findByIdAndUpdate({id: req.params.id},(err) => {
        //the above code finds the id, here the show page route for the wand being shown
        let wandQty = Wands.qty
        wandQty--
        //the wand's quantity is decreased by 1
        res.redirect('/wands')
        //the page will redirect to the wands index page.
        })
    })

//add put route
app.put('/wands/:id', (req, res)=>{
    console.log('put route', req.body)
    if(req.body.readyToSubmit === 'on'){
        req.body.readyToSubmit = true
    } else {
        req.body.readyToSubmit = false
    }
    wands[req.params.id]=req.body
    res.redirect('/wands')
})

// seed
// app.get('/wands/seed', (req, res)=>{
//     Wand.create([
//         {
//     wood: 'Yew',
//     core: 'Phoenix Feather',
//     img: 'https://static.wikia.nocookie.net/harrypotter/images/1/13/Lord_Voldemort%27s_wand.jpg/revision/latest?cb=20141208232950',
//     price: 5,
//     qty: 5, 
//     clients: 'Tom Riddle',  
// },
//     ], (err, data)=>{
//         res.redirect('/wands')
//     })
// })

//The instructions for project 2 say nothing about whether the seeding of databases is required for our project. Is seeding required? Not required for this project.

//I reviewed the class video for seeding databases from week 12 (8/13).
    //the purpose of seeding data is pushing additional array objects into an array that lives in a database, correct? The most common case when we're moving to the cloud infrastructure, for example, from a physical database.
//For project 2, do I have to have my array of objects in two places? Is the first place in my models and the second place a database using mongo?
        //Yes. Get the atlas account set up.
    //am I copying and pasting from my wands.js model file into my terminal or am I going to use my terminal to grab the array from my wands.js file? It feels like i'm duplicating my work.

//INTERNAL ROUTES
// app.use("/wands/seed", (req, res)=>{
//     Wand.create([])
// })






//SERVER LISTENER
app.listen(PORT, function(){
    console.log(`Open for Business! 🏪${PORT}`)
});


//I used the below source for the wands' information and images.
//https://harrypotter.fandom.com/wiki/Wand_wood

//const inventory = require('./models/index.js');
//QUESTION: where does this go in teh above order?


