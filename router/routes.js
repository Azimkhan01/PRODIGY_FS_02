const express = require("express")
const router = express.Router();
const {adminLogin} = require("../controller/adminLogin");
const { handleAdmin } = require("../controller/handleAdmin");


router.route("/").get(adminLogin);
router.route("/").post(handleAdmin)


module.exports = {router}