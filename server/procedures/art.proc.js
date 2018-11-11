var db = require("../config/db");

exports.all = function() {
    return db.rows("GetArt()", []);
};

exports.read = function(id) {
    return db.row('GetSingleArt(?)', [id]);
};

exports.write = function(product) {
    return db.row('AddToCart(?, ?)', [product.id, product.price]);
};

exports.delete = function(id) {
    return db.empty("RemoveFromCart(?)", [id]);
};