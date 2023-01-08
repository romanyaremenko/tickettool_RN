import {combineReducers} from "redux";
const {UPDATE_USERNAME} = require("../actions/user");

const user  = (user = { username: ''}, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return { username: action.username }
        default:
            return user;
    }
}

export default combineReducers({ user });
