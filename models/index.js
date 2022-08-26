const mongoose = require('mongoose')
const db = mongoose.connection;

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log(`Mongodb connected at ${db.host}:${db.port}`)
})
.catch((err)=>console.log(err))
                        
module.exports = {
                    //👇this has to match the schema file.
    Wand:require('./wandsDatabase.js')
    //👆this has to match the wands.js module.export word.
}