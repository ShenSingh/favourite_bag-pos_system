export default class ProductModel {
    constructor(code, description, category, unitPrice, qtyOnHand, image) {
        this._code = code;
        this._description = description;
        this._category = category;
        this._unitPrice = unitPrice;
        this._qtyOnHand = qtyOnHand;
        this._image = image;
    }

    // get product code
    getCode() {
        return this._code;
    }

    // get product description
    getDescription() {
        return this._description;
    }

    // get product category
    getCategory() {
        return this._category;
    }

    // get product unit price
    getUnitPrice() {
        return this._unitPrice;
    }

    // get product quantity on hand
    getQtyOnHand() {
        return this._qtyOnHand;
    }

    // get product image
    getImage() {
        return this._image;
    }

    // set product code
    setCode(code) {
        this._code = code;
    }

    // set product description
    setDescription(description) {
        this._description = description;
    }

    // set product category
    setCategory(category) {
        this._category = category;
    }

    // set product unit price
    setUnitPrice(unitPrice) {
        this._unitPrice = unitPrice;
    }

    // set product quantity on hand
    setQtyOnHand(qtyOnHand) {
        this._qtyOnHand = qtyOnHand;
    }

    // set product image
    setImage(image) {
        this._image = image;
    }
}