const express = require("express")
const router = express.Router();
const {adminLogin} = require("../controller/adminLogin");
const { handleAdmin } = require("../controller/handleAdmin");
const {insert} = require("../controller/insert");
const {handleInsert} = require("../controller/handleInsert");
const {update} = require("../controller/update");
const {handleUpdate} = require("../controller/handleUpdate");
const {remove} = require("../controller/remove");
const {handleRemove} = require("../controller/handleRemove");
const {view} = require("../controller/view");
const {employeeDashboard} = require("../controller/employeeDashboard");
const {error} = require("../controller/error");
const {empApi} = require("../controller/empApi");

router.route("/").get(adminLogin);
router.route("/").post(handleAdmin);
router.route("/insert").get(insert);
router.route("/insert").post(handleInsert);
router.route("/update").get(update);
router.route("/update").post(handleUpdate);
router.route("/remove").get(remove);
router.route("/remove").post(handleRemove);
router.route("/view").get(view);
router.route("/Dashboard").get(employeeDashboard);
router.route("/api_emp_details").get(empApi);
router.route('*').get(error);

module.exports = {router}