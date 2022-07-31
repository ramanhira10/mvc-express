const {
    QueryListOfUsers,
    QueryUserById,
    DeleteUserById
} = require("../services/UserTable");

const GetAllUsers = (req, res) => res.json(QueryListOfUsers());

const GetUser = (req, res) => {
    const userId = req.params.id;
    const user = QueryUserById(userId);
    return res.json(user);
};

const DeleteUser = (req, res) => {
    const userId = req.params.id;
    const users = DeleteUserById(userId);
    return res.json(users);
};

module.exports = {
    GetAllUsers,
    GetUser,
    DeleteUser
};