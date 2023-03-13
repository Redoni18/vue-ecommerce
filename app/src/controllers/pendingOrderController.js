const PendingOrders = require('../models/PendingOrders');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_pending_orders = function(req, res) {
    PendingOrders.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_pending_order = function(req, res) {

    console.log(req.body)

    let newPendingOrder = new PendingOrders({
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

    newPendingOrder.save();

    res.json({
        data: newPendingOrder
    });
}

exports.delete_pending_order = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    PendingOrders.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}