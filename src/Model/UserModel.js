export default class UserModel {
    constructor(id, username, email, password) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    // get user id
    getId() {
        return this._id;
    }

    // get user username
    getUsername() {
        return this._username;
    }

    // get user email
    getEmail() {
        return this._email;
    }

    // get user password
    getPassword() {
        return this._password;
    }

    // set user id
    setId(id) {
        this._id = id;
    }

    // set user username
    setUsername(username) {
        this._username = username;
    }

    // set user email

    setEmail(email) {
        this._email = email;
    }

    // set user password
    setPassword(password) {
        this._password = password;
    }
}