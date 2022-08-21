const mongoose = require('mongoose')
const db = mongoose.connection;

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log(`Mongodb connected at ${db.host}:${db.port}`)
})
.catch((err)=>console.log(err))

module.exports = {
    Post:require('./Wand')
}
//by requiring with the line: post:require('./post'), is the above module reaching into post.js and getting the module from there?