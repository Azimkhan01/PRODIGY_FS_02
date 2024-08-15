const {Employee} = require("../database/employeDetails");

const handleInsert = async (req,res)=>{
    let {id,name,email,phone,joinDate,dob,salary,address,branch} = req.body
    if(id,name,email,phone,joinDate,dob,salary,address,branch)
    {  const cookieStatus = await req.cookies
        console.log(JSON.stringify(cookieStatus["status"]))
        if(JSON.stringify(cookieStatus["status"]) == undefined)
        {
            res.render("admin");
        }else{
            
            // console.log(JSON.stringify(req.cookies))
            const insert =await  Employee.create({id,name,email,phone,joinDate:joinDate,dob,salary,address,branch});
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

   
}
 module.exports = {handleInsert};