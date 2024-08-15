const {Employee} = require("../database/employeDetails");

const handleInsert = (req,res)=>{
    let {name,email,phone,joinDate,dob,salary,address,branch} = req.body
    if(name,email,phone,joinDate,dob,salary,address,branch)
    {
        const insert = Employee.create({name,email,phone,joinDate,dob,salary,address,branch});
        if(insert)
        {
            res.render("insert",{
                status:"Employe details inserted succesfully"
            });
        }else{
            res.render("insert",{
                status:"Employe details not inserted "
            });
        }
    }

   
}
 module.exports = {handleInsert};