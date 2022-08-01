const express = require("express");
const router = express.Router();

const {
    GetAllUsers,
    GetUser,
    DeleteUser
} = require("../controllers/User");

router.get("/", GetAllUsers);
router.get("/:id", GetUser);
router.delete("/:id/delete", DeleteUser);

module.exports = router;