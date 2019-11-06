var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        value:{
            type: Number,
            required: true
        },
        category:{
            type: String,
            required: true
        },

    });

    return mongoose.model('Product', schema, 'products');
}