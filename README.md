# Project-2

Per the instructions page, inside Your README.md:
1. Include User Stories
2. Include wireframes that you designed during the planning process
3. Have a link to your hosted working app.

Project Choice (Tell us which project you're doing!): Ollivanders
Project Description
Include: Inspired by Harry Potter, a shop inventory for Ollivander’s wands.

General App Idea/Purpose: The app serves as a shopkeeper's inventory of Ollivander's wands with relevant information about each wand. Specifically, the quantity of wands in stock, wands' component information (wood and feather-type), price and who the wands are sold to.

Models including field names and their datatypes:

const wandsSchema = Schema({
wood: {type: String, required: true},
feather: {type: String, required: true},
image: String,
price: { type: Number, minimum: 0},
qty: { type: Number, minimum: 0}
})


> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)
1. GET; /wands; Index page; List of wands
2. GET; /wands/:id; Show page; Information for 1 wand
3. GET; /wands/new; New page; Add new wand to inventory
4. POST; /wands; Create page; Create wand on server
5. GET; /wands/:id/edit; Edit page; Get form already filled in for user to change
6. PUT/PATCH; /wands/:id; update; update wand 's data on server
7. DELETE; /wands/:id; destroy; removes wand from server

Wireframes
Wireframes with basic page layouts
Copy and paste or drag and drop your images here.
image

User Stories

MVP Goals
User stories detailing app functionality
Add user stories following the As a [type of user], I want [what the user wants], so that [what it helps accomplish] format.

As a wand-shop owner, I want to have an index of all of my wand wood-types and their stock status, so that I can see easily what wands are available for sale and whether I need to construct more.

As a wand-shop owner, I want to have a page showing each wand's information, including wood-type, feather-type, wand quantity in stock, price and who I've sold the wand to because knowing this information is critical to do business.

As a wand-shop owner, I want to have a page to add a new wand type to my inventory so that I can have the ability to account for new wands that I construct to restock my supply.

As a wand-shop owner, I want to have a page where I can edit details for each wand so that I can correct any mistakes or mark a wand as sold.

Stretch Goals
-Use EJS Partials
-Include portfolio-quality styling

Links:
https://github.com/3campos/Project-2/blob/main/README.md

When done, do: git push heroku main

To see all errors and push history to heroku, run: 
heroku logs --tail



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