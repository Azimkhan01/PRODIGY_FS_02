const handleAdmin = (req,res)=>{
    res.cookie('adminLogin', 'the login is approved', { maxAge: 900000, httpOnly: true });

    res.render("employeeDashboard");
    }
    
    module.exports = {handleAdmin}