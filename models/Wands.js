const wands = [{
    wood: 'Ash',
    core: 'Unicorn Hair',
    img: 'https://imgur.com/Fk6GEyF',
    price: 5,
    qty: 5,
    clients: 'Ron Weasley'
},
{
    wood: 'Alder',
    core: 'Phoenix Feather',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/b/bd/Alder.png/revision/latest?cb=20120718010016',
    price: 5,
    qty: 5,
    clients: 'Quirinus Quirrell'
},
{
    wood: 'Birch',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Ash.png/revision/latest?cb=20130807174346',
    price: 5,
    qty: 5, 
    clients: 'Dolores Umbridge'
},
{
    wood: 'Cedar',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/f/fb/ProfHoraceSlughornWandNN8294.jpg/revision/latest/scale-to-width-down/110?cb=20141208233440',
    price: 5,
    qty: 5, 
    clients: 'Horace Slughorn'
},
{
    wood: 'Cherry',
    core: 'Unicorn Hair',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/f/f0/Neville%27s_wand.jpg/revision/latest/scale-to-width-down/110?cb=20141209002728',
    price: 5,
    qty: 5, 
    clients: 'Neville Longbottom'
},
{
    wood: 'Cherry',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/6/6d/Gilderoy_Lockhart.jpg/revision/latest/scale-to-width-down/110?cb=20160117044239',
    price: 5,
    qty: 5, 
    clients: 'Gilderoy Lockhart'
},
{
    wood: 'Cypress',
    core: 'Unicorn Hair',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/4/40/Remus_wand.jpg/revision/latest/scale-to-width-down/110?cb=20141208233259',
    price: 5,
    qty: 5, 
    clients: 'Remus Lupin'
},
{
    wood: 'Elm',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/e/ee/Lucius_Malfoy_wand.png/revision/latest?cb=20210108150531',
    price: 5,
    qty: 5, 
    clients: 'Lucius Malfoy'
},
{
    wood: 'Fir',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/d/df/McGonagall_Wand.png/revision/latest/scale-to-width-down/1000?cb=20161128005505',
    price: 5,
    qty: 5, 
    clients: 'Minerva McGonagall'
},
{
    wood: 'Hawthorn',
    core: 'Unicorn Hair',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/f/f0/Draco_Malfoy_Wand.jpg/revision/latest/scale-to-width-down/110?cb=20141208233016',
    price: 5,
    qty: 5, 
    clients: 'Draco Malfoy'
},
{
    wood: 'Hazel',
    core: 'Unicorn Hair',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/e/e2/Sybill_Trelawney_wand.png/revision/latest?cb=20161126073936',
    price: 5,
    qty: 5, 
    clients: 'Sybill Trelawney'
},
{
    wood: 'Holly',
    core: 'Phoenix Feather',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/c/ca/HarryPotterWandNN8415.jpg/revision/latest?cb=20141208232731',
    price: 5,
    qty: 5, 
    clients: 'Harry Potter'
},
{
    wood: 'Hornbeam',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/a/a3/ViktorKrumWand.jpg/revision/latest?cb=20141208235231',
    price: 5,
    qty: 5, 
    clients: 'Viktor Krum'
},
{
    wood: 'Mahogany',
    core: 'Phoenix Feather',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/a/a5/JamesPotterWand_NN8206.jpg/revision/latest?cb=20141208234732',
    price: 5,
    qty: 5, 
    clients: 'James Potter'
},
{
    wood: 'Rosewood',
    core: 'Veela Hair',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/1/12/FleurDelacourWandNN8246.jpg/revision/latest?cb=20140602200656',
    price: 5,
    qty: 5, 
    clients: 'Fleur Delacour'
},
{
    wood: 'Vine',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/c/c6/HermioneGrangerWandNN8411.jpg/revision/latest?cb=20140602200406',
    price: 5,
    qty: 5, 
    clients: 'Hermione Granger'
},
{
    wood: 'Walnut',
    core: 'Dragon Heartstring',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/c/c3/Bellatrix_lestrange_wand.jpg/revision/latest?cb=20150613214534',
    price: 5,
    qty: 5, 
    clients: 'Bellatrix Lestrange'
},
{
    wood: 'Willow',
    core: 'Phoenix Feather',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/6/62/RonWeasleyWandNN8413.jpg/revision/latest?cb=20141208232815',
    price: 5,
    qty: 5, 
    clients: 'Lily Evans'
},
{
    wood: 'Willow',
    core: 'Unicorn Hair',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/6/62/RonWeasleyWandNN8413.jpg/revision/latest?cb=20141208232815',
    price: 5,
    qty: 5, 
    clients: 'Ronald Weasley'
},
{
    wood: 'Yew',
    core: 'Phoenix Feather',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/1/13/Lord_Voldemort%27s_wand.jpg/revision/latest?cb=20141208232950',
    price: 5,
    qty: 5, 
    clients: 'Tom Riddle',  
},
{
    wood: 'Yew',
    core: 'Phoenix Feather',
    img: 'https://static.wikia.nocookie.net/harrypotter/images/0/0c/Ginny%27s_wand.jpg/revision/latest?cb=20141208233945',
    price: 5,
    qty: 5, 
    clients: 'Ginevra Weasley',  
}]

module.exports = wands