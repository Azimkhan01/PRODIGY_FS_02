const {Employee} = require("../database/employeDetails");

const empApi =async (req,res)=>{

    const cookieStatus = await req.cookies
    console.log(JSON.stringify(cookieStatus["status"]))
    if(JSON.stringify(cookieStatus["status"]) == undefined)
    {
        res.render("admin");
    }else{
        let data = await Employee.find({});
        // console.log(data);
        // console.log(JSON.stringify(req.cookies))
        if(data !=undefined)
        {
        res.json(data) }
        else{
            res.json({"status":" data not found 201 error"})
        }
    }

   

}

module.exports = {empApi}