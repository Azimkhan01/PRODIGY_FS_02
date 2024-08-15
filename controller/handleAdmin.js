const handleAdmin = (req,res)=>{
    res.cookie('status', true, { maxAge: 900000, httpOnly: true });

    res.redirect("Dashboard");
    }
    
    module.exports = {handleAdmin}