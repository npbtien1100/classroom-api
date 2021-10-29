const express = require("express");
const router = express.Router();

const {createAClass, getAClass, getAllClasses, updateAClass, deleteAClass} = require("./classController");
/* GET users listing. */
router.get("/", getAllClasses);
router.post("/", createAClass);
router.get("/:id", getAClass);
router.put("/:id", updateAClass);
router.delete("/:id", deleteAClass);


module.exports = router;
