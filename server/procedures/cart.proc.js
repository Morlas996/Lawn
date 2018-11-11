var db = require("../config/db");

exports.all = function() {
    return db.rows("GetCart()", []);
};

exports.write = function(purchase) {
    return db.row('AddToCart(?, ?)', [purchase.productid, purchase.price]);
};

exports.delete = function(id) {
    return db.empty("RemoveFromCart(?)", [id]);
};
