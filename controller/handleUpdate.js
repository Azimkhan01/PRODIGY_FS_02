const {Employee} = require("../database/employeDetails");
const handleUpdate =async (req,res)=>{
    let {id,name,email,phone,joinDate,dob,salary,address,branch} = req.body
    let updateEmp =await  Employee.updateMany({id:id},{name,email,phone,joinDate,dob,salary,address,branch});
    console.log(updateEmp);
    if(updateEmp)
    {
        res.render("update",{
            status:"Details Updated Succesfully"
        });
    }else{
        res.render("update",{
            status:"Failed to Update"
        })
    }
   
}
 module.exports = {handleUpdate};