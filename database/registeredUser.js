const  mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/Oauth';
mongoose.connect(mongoDB).then(()=>{
    console.log("Connected to sql succesfully")
});



module.exports = {register};