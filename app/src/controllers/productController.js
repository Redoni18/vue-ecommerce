const Products = require('../models/Products');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_products = function(req, res) {
    Products.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_product = function(req, res) {

    console.log(req.body)

    let newProduct = new Products({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        stock: req.body.stock,
        image: req.body.image,
        imageUrl: req.body.imageUrl,
        productPrice: req.body.productPrice,
        insertedBy: req.body.insertedBy,
        insertDate: req.body.insertDate,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand
    });

    newProduct.save();

    res.json({
        data: newProduct
    });
}

exports.edit_product = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedProduct = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        stock: req.body.stock,
        image: req.body.image,
        imageUrl: req.body.imageUrl,
        productPrice: req.body.productPrice,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand
    }

    Products.findByIdAndUpdate(req.body._id, { $set: updatedProduct }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating product')
        }
    })
}

exports.delete_product = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Products.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_product = function(req, res) {
    let id = req.params.id;

    try {
        Products.findById({ _id: id }).exec(function(err, product) {
            if (product) {
                res.send(product);
            }
        });
    } catch (error) {
        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send(error.message);
        }

        console.error(error);
        return res.status(500).send(error.message);
    }
};

exports.findProductByName = async (req, res) => {
    const searchTerm = req.query.searchTerm;
    try {
        const regex = new RegExp(searchTerm, 'i');
        const products = await Products.find({ productName: { $regex: regex } });
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};