var auth = require('../../config/auth').auth;

module.exports = function(app){

    var controller = app.controllers.product;

    app.get('/product', controller.index);
    app.post('/product', controller.newProduct);
}