require("dotenv").config()

//EXTERNAL MODULES
const express = require('express');
const methodOverride = require('method-override');
//added:
const session = require('express-session')
//REQUIRE MODELS HERE (added):

const { render } = require('ejs');
const Wand = require('./models/wandsDatabase.js')
// const Wands = require("./models/wandsDatabase.js")

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
const mongoose = require('mongoose');
const { db } = require("./models/wandsDatabase.js");
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

//INDEX 
app.get("/wands", (req, res)=>{
    Wand.find({}, (error, allWands) => {
        res.render('index.ejs', {
             wands: allWands
            }); 
            console.log('logging allWands', allWands)//this logs as "allWands is not defined"
    })
         
})

//NEW ROUTE
    // always put the new route above the show route
app.get('/wands/new', (req, res) => {
    res.render('new.ejs')
})

//SHOW ROUTE
app.get('/wands/:id', (req, res)=>{
    Wand.findById(req.params.id, (error, wand)=>{
        res.render('show.ejs', {
            wand: wand,
            //the request that we're making here is getting the param. The id is what is being passed in.
            //we stored the id in its own variable that we can interpolate the variable into a delete route.
        })
    })
})

//what i'm trying to accomplish with the below code is decrease the quantity of the wand by 1.
    //My set up seems correct but nothing is happening to the wand's quantity (that is, it's not decreasing). Am I missing something here?
//PUT ROUTE
// app.put('/wands/:id/sell', (req, res)=>{
//     console.log('wand sell triggered')
//     //the above line is a route to the sell page. The button that invokes this route is contained in the show.ejs page.
//     Wand.findByIdAndUpdate({id: req.params.id},(err) => {
//         //findByIdAndUpdate is for databases
//         //the above code finds the id, here the show page route for the wand being shown
//         Wand.qty -= 1
//         //the wand's quantity is decreased by 1
//         res.redirect('/wands/:id/sell')
//             //res.redirect is okay here but I need to find the route that I will redirect to. Here, it would be the same page.
//         //the page will redirect to the wands index page.
//         })
//     })

//PUT ROUTE
// app.put('/wands/:id', (req, res)=>{
//     console.log('put route', req.body)
//     if(req.body.readyToSubmit === 'on'){
//         req.body.readyToSubmit = true
//     } else {
//         req.body.readyToSubmit = false
//     }
//     Wand[req.params.id]=req.body
//     res.redirect('/wands')
// })

// //CREATE ROUTE
// app.post('/wands', (req, res)=>{
//     if(req.body.readyToSubmit === 'on'){
//         req.body.readyToSubmit = true
//     } else {
//         req.body.readyToSubmit = false
//     }

//     Wand.create(req.body, (error, createdWand) {
//         if(error) {
//             console.log(error);
//             res.send(error);
//         } else {
//             res.redirect('/wands')
//         }
//     })
// })

//DESTROY
// app.delete('/wands/:id', (req, res)=>{
//     Wands.splice(req.params.id, 1)
//     res.redirect('/wands')
//   }
//   )

//EDIT route=set up similarly to the show page.
//access the pokemon by the index
  //but also have a variable of the id like what we've done for the show route.
// app.get('/wands/:id/edit', (req, res) => {
//     res.render('edit.ejs', {
//         allWands: Wands[req.params.id],
//         id: req.params.id
//     })
// })


//Internal Routes
app.use("/wands", testCtrl);
//whenever the user goes to /wands, the testCtrl will be imported. That is where we're bringing the database to be read by the server.


//SERVER LISTENER
app.listen(PORT, function(){
    console.log(`Open for Business! 🏪${PORT}`)
});


//I used the below source for the wands' information and images.
//https://harrypotter.fandom.com/wiki/Wand_wood

//const inventory = require('./models/index.js');
//QUESTION: where does this go in teh above order?


