const {Employee} = require("../database/employeDetails")

const handleRemove =async  (req,res)=>{
    const cookieStatus = await req.cookies
console.log(JSON.stringify(cookieStatus["status"]))
if(JSON.stringify(cookieStatus["status"]) == undefined)
{
    res.render("admin");
}else{
    
    

    const cookieStatus = await req.cookies
console.log(JSON.stringify(cookieStatus["status"]))
if(JSON.stringify(cookieStatus["status"]) == undefined)
{
    res.render("admin");
}else{
    
    // console.log(JSON.stringify(req.cookies))
    let idToRemove = req.body.id;
    // console.log(idToRemove)
    
    if(idToRemove){
    let removed = await  Employee.deleteMany({id:idToRemove}); 
    // console.log(removed) 
    res.render("remove",{
        status:"Employee removed succesfully"
    });
    }
}
}
}
 module.exports = {handleRemove};