export default class CustomerModel {
    constructor(id, name, email, phone, address) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
    }

    // get customer id
    getId() {
        return this._id;
    }

    // get customer name
    getName() {
        return this._name;
    }

    // get customer email
    getEmail() {
        return this._email;
    }

    // get customer phone
    getPhone() {
        return this._phone;
    }

    // get customer address
    getAddress() {
        return this._address;
    }

    // set customer id
    setId(id) {
        this._id = id;
    }

    // set customer name
    setName(name) {
        this._name = name;
    }

    // set customer email
    setEmail(email) {
        this._email = email;
    }

    // set customer phone
    setPhone(phone) {
        this._phone = phone;
    }

    // set customer address
    setAddress(address) {
        this._address = address;
    }
}