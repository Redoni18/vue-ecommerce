const Products = require('../models/Products');
var ObjectID = require('mongoose').Types.ObjectId
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.get_products = function(req, res) {
    Products.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_product = async function(req, res) {

    console.log(req.body)

    const stripeProduct = await stripe.products.create({
        name: req.body.productName,
        description: req.body.productDescription,
    });
    const stripeProductPrices = await stripe.prices.create({
        unit_amount: req.body.productPrice * 100, // Stripe requires the price in cents
        currency: "eur",
        product: stripeProduct.id,
    });

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
        productBrand: req.body.productBrand,
        stripePriceId: stripeProductPrices.id
    });

    console.log(stripeProductPrices)

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

exports.filterProductsByBrand =  async (req, res, next) => {
    try {
        const selectedBrandIds = req.query.brands.split(',');
        const category = req.params.category
        const products = await Products.find({ 'productCategory._id': category, 'productBrand._id': { $in: selectedBrandIds } }).populate('productBrand');
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with selected brands' });
        }
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.stripeCheckoutSession = async (req, res, next) => {
    let id = req.params.id;
    const product = await Products.findById(id);
    const price = product.productPrice;
    // const quantity = req.body.quantity;

    try {
        // Create a Checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.productName,
                        description: product.productDescription,
                        images: [product.imageUrl],
                    },
                    unit_amount: price * 100,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `http://localhost:8080/#/products/details/${product._id}`,
            cancel_url: `http://localhost:8080/#/products/details/${product._id}`,
        });

        res.json({ sessionId: session.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};