const Contacts = require('../models/Contacts');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_contacts = function(req, res) {
    Contacts.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.insert_contacts = function(req, res) {

    console.log(req.body)

    let newContacts = new Contacts({
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactNumber: req.body.contactNumber,
        contactDescription: req.body.contactDescription
    });

    newContacts.save();

    res.json({
        data: newContacts
    });
}

exports.edit_contacts = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedContacts = {
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactNumber: req.body.contactNumber,
        contactDescription: req.body.contactDescription
    }

    Contacts.findByIdAndUpdate(req.body._id, { $set: updatedContacts }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating PayMethod')
        }
    })
}

exports.delete_contacts = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Contacts.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_contact = function(req, res) {
    let id = req.params.id;

    try {
        Contacts.findById({ _id: id }).exec(function(err, contact) {
            if (contact) {
                res.send(contact);
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