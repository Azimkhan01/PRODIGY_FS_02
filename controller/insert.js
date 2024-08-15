const insert = async (req,res)=>{
    const cookieStatus = await req.cookies
    console.log(JSON.stringify(cookieStatus["status"]))
    if(JSON.stringify(cookieStatus["status"]) == undefined)
    {
        res.render("admin");
    }else{
        
        // console.log(JSON.stringify(req.cookies))
        res.render("insert");
    }
    }

 module.exports = {insert};