const  mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/Employee_Management';
mongoose.connect(mongoDB).then(()=>{
    console.log("Connected to sql succesfully")
});

const EmployeeScehma = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    joinDate:{
        type:String,
        trim:true
    },
    dob:{
        type:String,
        trim:true
    },
    salary:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    branch:{
        type:String,
        trim:true
    }

});

const Employee = new mongoose.model("Employee",EmployeeScehma);

module.exports = {Employee};