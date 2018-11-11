var express = require("express");
//basic template for express
//var users = require("./server/controllers/users.ctrl");
var contact = require("./server/controllers/contact.ctrl");
var art = require("./server/controllers/art.ctrl");





var router = express.Router();
router.use("/contact", contact);



module.exports = router;