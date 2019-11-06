module.exports = function(app){
    var Product = app.models.product;

    var controller = {
        index: function(req,res){
            Product.find({},[],{sort: {product:1} }).exec().then((products) => {
                res.send(products);
            })
        },
        newProduct:function(req,res){
            var product = new Product(req.body);
            product.save(function(err,product){

                if(err)
                    res.status(500).end();
                else
                    res.json(product);
            });
        },
    }

    return controller;
}