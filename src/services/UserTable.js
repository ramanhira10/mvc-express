const {USER_FAKE_DATA} = require("../models/UserFakeData");

/** Returns User with id */
const QueryUserById = id => USER_FAKE_DATA.find(userData => userData.id === Number(id));

/** Returns List of Users */
const QueryListOfUsers = () => USER_FAKE_DATA;

/** Delete the User by id */
const DeleteUserById = id => USER_FAKE_DATA.filter(user => user.id !== Number(id));

module.exports = {
    QueryListOfUsers,
    QueryUserById,
    DeleteUserById
};