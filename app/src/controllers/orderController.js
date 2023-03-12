const Orders = require('../models/Orders');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_orders = function(req, res) {
    Orders.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_order = function(req, res) {

    console.log(req.body)

    let newOrder = new Orders({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        productId: req.body.productId,
        productName: req.body.productName,
        orderPrice: req.body.orderPrice,
        paymentMethod: req.body.paymentMethod,
        isCompleted: req.body.isCompleted
    });

    newOrder.save();

    res.json({
        data: newOrder
    });
}

exports.edit_order = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedOrder = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        productId: req.body.productId,
        productName: req.body.productName,
        orderPrice: req.body.orderPrice,
        paymentMethod: req.body.paymentMethod,
        isCompleted: req.body.isCompleted
    }

    Orders.findByIdAndUpdate(req.body._id, { $set: updatedOrder }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating Order')
        }
    })
}

exports.delete_order = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Orders.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_order = function(req, res) {
    let id = req.params.id;

    try {
        Orders.findById({ _id: id }).exec(function(err, order) {
            if (order) {
                res.send(order);
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