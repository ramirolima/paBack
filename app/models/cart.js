var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        id_product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        qtd: {
            type: Number,
            required: true,
        }
    });

    return mongoose.model('Cart', schema, 'carts');
}